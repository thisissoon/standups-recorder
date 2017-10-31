import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DaysResponse, DayItem } from '../api/models';
import { CurrentStandupService } from '../local-store/services';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {

  /**
   * Get keys of an object
   *
   * @memberof HomeComponent
   */
  public objectKeys = Object.keys;

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
  public calendarArray: DayItem[][];

  /**
   * Creates an instance of HistoryComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof HistoryComponent
   */
  constructor(
    protected route: ActivatedRoute,
    public currentStandupService: CurrentStandupService
  ) { }

  /**
   * get resolved data and save data as component property.
   * Generate calendarObject from DBDays.
   *
   * @memberof HistoryComponent
   */
  ngOnInit() {
    this.route.data.forEach((data: { days: DaysResponse, calendarArray: DayItem[][] }) => {
      this.DBDays = data.days._embedded.days;
      this.calendarArray = data.calendarArray;
    });
  }

}
