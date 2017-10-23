import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';

import { PositionService, SummaryService, StaffMemberService, DayService } from '../api/services';

import { DayItem, DaysResponse } from '../api/models';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  /**
   * Today's day from backend API.
   * Null if day doesn't exist yet
   *
   * @type {number}
   * @memberof TodayComponent
   */
  public today: DayItem;

  constructor(
    private positionService: PositionService,
    private summaryService: SummaryService,
    private staffMemberService: StaffMemberService,
    private dayService: DayService
  ) {
    positionService.get('be774180-9a2a-11e7-979c-cb40e3c89a8d')
    .subscribe(value => console.log(value));
    positionService.list(new HttpParams().set('dayID', 'bd76e880-9a2a-11e7-979c-cb40e3c89a8d'))
    .subscribe(value => console.log(value));
    summaryService.get('be7ee2a2-9a2a-11e7-979c-cb40e3c89a8d')
    .subscribe(value => console.log(value));
    summaryService.list(new HttpParams().set('dayID', 'bd76e880-9a2a-11e7-979c-cb40e3c89a8d'))
    .subscribe(value => console.log(value));
    staffMemberService.get('bd53f730-9a2a-11e7-979c-cb40e3c89a8d')
    .subscribe(value => console.log(value));
    staffMemberService.list(new HttpParams().set('current', 'true'))
    .subscribe(value => console.log(value));
    dayService.get('bd76e880-9a2a-11e7-979c-cb40e3c89a8d')
    .subscribe(value => console.log(value));
    dayService.list(new HttpParams().set('date', new Date().toISOString().split('T')[0]))
      .subscribe((value: DaysResponse) => {
        this.today = value._embedded ? value._embedded.days[0] : null;
      });
    // dayService.list(new HttpParams().set('date', '2017-04-12'))
    //   .subscribe((value: DaysResponse) => {
    //     this.today = value._embedded ? value._embedded.days[0] : null;
    //     if (this.today) {
    //       this.getStandup(this.today.ID);
    //     }
    //   });
  }

  ngOnInit() {

  }
  /**
   * Returns standup object
   *
   * @readonly
   * @type {void}
   * @memberof TodayComponent
   */
  public getStandup(dayID: string): void {
    console.log(dayID);
  }

}
