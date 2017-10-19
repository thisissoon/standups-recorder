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
  }

}
