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
   * List of days
   *
   * @memberof HomeComponent
   */
  public days: DayItem[];

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
   * get resolved data and save data as
   * component property
   *
   * @memberof HistoryComponent
   */
  ngOnInit() {
    this.route.data.forEach((data: { days: DaysResponse }) => {
      this.days = data.days._embedded.days;
    });

    function generateCalendarArray(DBDays) {
      let array: any = Array(DBDays.length).fill(null);
      array = array
      .map((element, index) => {
        return new Date(Date.now() - index * (86400000));
      })
      .filter(date => {
        const day = date.toUTCString().split(',')[0];
        return !(day.includes('Sat') || day.includes('Sun'));
      })
      .reduce((sum, date) => {
        const ISOString = date.toISOString().split('T')[0];
        if (DBDays[sum.daysIndex].date === ISOString) {
          sum.calendarArray.push({
            date,
            ID: DBDays[sum.daysIndex].ID
          });
          sum.daysIndex ++;
        } else {
          sum.calendarArray.push({
            date,
            ID: null
          });
        }
        return sum;
      }, {calendarArray: [], daysIndex: 0});
      return array;
    }

    console.log(generateCalendarArray(this.days));
    // console.log(this.days);




  }

}
