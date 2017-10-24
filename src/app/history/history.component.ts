import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DaysResponse, DayItem } from '../api/models';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  /**
   * List of days from the backend
   *
   * @memberof HomeComponent
   */
  public DBDays: DayItem[];

  /**
   * Date object of today's date
   *
   * @memberof HomeComponent
   */
  public todayDate: Date = new Date();

  /**
   * List of all weekdays enriched with
   * dayIDs where possible
   *
   * @memberof HomeComponent
   */
  public calendarArray: DayItem[];

  /**
   * Creates an instance of HistoryComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof HistoryComponent
   */
  constructor(
    protected route: ActivatedRoute,
  ) { }

  /**
   * Generate an array with all weekdays from now back
   * and enrich with day IDs where possible.
   *
   * Makes null array of suitable length, populates with
   * date objects seperated by 24hours in milliseconds from the
   * next future friday, removes weekends, checks each day
   * against the first day from the DBdays array, if match
   * ID used.
   *
   * @param {DBDays: DayItem[]} DBDays
   * @memberof HistoryComponent
   */
  public generateCalendarArray(DBDays: DayItem[], todayDate: Date): DayItem[] {
    DBDays = Array.from(DBDays);
    const daysUntilFriday = 5 - todayDate.getDay();
    return Array(DBDays.length)
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
      });
  }

  /**
   * get resolved data and save data as component property.
   * Generate calendarArray from DBDays.
   *
   * @memberof HistoryComponent
   */
  ngOnInit() {
    this.route.data.forEach((data: { days: DaysResponse }) => {
      this.DBDays = data.days._embedded.days;
    });
    this.calendarArray = this.generateCalendarArray(this.DBDays, this.todayDate);
  }

}
