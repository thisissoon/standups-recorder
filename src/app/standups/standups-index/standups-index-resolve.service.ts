import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';

import { DayService } from '../../api/services';
import { DaysResponse, DayItem } from '../../api/models';

@Injectable()
export class DaysResolver implements Resolve<DaysResponse[]> {
  /**
   * Creates an instance of DaysResolver.
   * @param {QuestionsService} dayService
   * @memberof DaysResolver
   */
  constructor(private dayService: DayService) { }
  /**
   * make request to day service to get list of days
   *
   * @returns {Observable<DaysResponse[]>}
   * @memberof DaysResolver
   */
  resolve(): Observable<DaysResponse[]> {
    return this.dayService.list();
  }
}

@Injectable()
export class CalendarArrayResolver implements Resolve<DayItem[][]> {
  /**
   * Creates an instance of CalendarArrayResolver.
   * @param {QuestionsService} dayService
   * @memberof CalendarArrayResolver
   */
  constructor(private dayService: DayService) { }
  /**
   * make request to day service to get list of days
   *
   * @returns {Observable<DayItem[][]>}
   * @memberof CalendarArrayResolver
   */
  resolve(): Observable<DayItem[][]> {
    return this.dayService
      .list()
      .map((response: DaysResponse) => {
        if (response._embedded) {
          return this.generateCalendarArray(response._embedded.days, new Date());
        }
      });
  }

  /**
   * Generate an array with all weekdays from now back
   * and enrich with day IDs where possible.
   *
   * 1. Makes null array of suitable length multiple of 7.
   * 2. Populates with date objects seperated by 24hours in
   *    milliseconds from the next future friday.
   * 3. Removes weekends.
   * 4. Checks each day against the first day from the DBdays array,
   *    if match ID used.
   * 5. Reduces array into an object with keys for each week
   *    and values of arrays of 5 days
   *
   * @param {DBDays: DayItem[]} DBDays
   * @memberof DaysResolver
   */
  public generateCalendarArray(DBDays: DayItem[], todayDate: Date): DayItem[][] {
    DBDays = Array.from(DBDays);
    const daysUntilFriday = 5 - todayDate.getDay();
    return Array(DBDays.length - (DBDays.length % 7))
      .fill(null)
      .map((element, index) => {
        return new Date(
          Date.now()
          + (daysUntilFriday * 86400000)
          - (index * 86400000)
        );
      })
      .filter(date => {
        const day = date.toUTCString().split(',')[0];
        return !(day.includes('Sat') || day.includes('Sun'));
      })
      .map(date => {
        const ISOString = date.toISOString().split('T')[0];
        const day = {
          date,
          ID: null
        };
        if (DBDays[0].date === ISOString) {
          day.ID = DBDays.shift().ID;
        }
        return day;
      })
      .reduce((sum, day, index) => {
        if (index % 5 === 0) {
          sum[(index - index % 5) / 5] = [];
        }
        sum[(index - index % 5) / 5].push(day);
        return sum;
      }, [])
      .map(array => {
        return array.reverse();
      });
  }

}
