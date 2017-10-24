import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { DayItem, DaysResponse } from '../api/models';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  /**
   * Today's Date
   *
   * @type {Date}
   * @memberof TodayComponent
   */
  public today: Date = new Date();

  constructor() {

  }

  ngOnInit() {

  }

}
