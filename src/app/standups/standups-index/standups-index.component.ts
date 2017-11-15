import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DaysResponse, DayItem } from '../../api/models';
import { CurrentStandupService } from '../../local-store/services';

@Component({
  selector: 'app-standups-index',
  templateUrl: './standups-index.component.html',
  styleUrls: ['./standups-index.component.scss']
})
export class StandupsIndexComponent implements OnInit {

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
   * Creates an instance of StandupsIndexComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof StandupsIndexComponent
   */
  constructor(
    protected route: ActivatedRoute,
    public currentStandupService: CurrentStandupService
  ) { }

  /**
   * get resolved data and save data as component property.
   * Generate calendarObject from DBDays.
   *
   * @memberof StandupsIndexComponent
   */
  ngOnInit() {
    this.route.data.forEach((data: { days: DaysResponse, calendarArray: DayItem[][] }) => {
      this.DBDays = data.days._embedded ? data.days._embedded.days : null;
      this.calendarArray = data.calendarArray;
    });
  }

}
