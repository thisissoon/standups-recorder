import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

import { CurrentStandupService } from '../local-store/services';

import {
  DayItem,
  DaysResponse,
  PositionItem,
  PositionsResponse,
  SummaryItem,
  SummariesResponse,
  StaffMemberItem,
  StaffMembersResponse
} from '../api/models';

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

  /**
   * Today's day object from DB if exists
   *
   * @type {DayItem}
   * @memberof TodayComponent
   */
  public DBToday: DayItem | null = null;

  /**
   * Positions with today's day ID
   *
   * @type {PositionItem[] | null}
   * @memberof TodayComponent
   */
  public DBTodayPositions: PositionItem[] | null = null;

  /**
   * Summaries with today's day ID
   *
   * @type {SummaryItem[] | null}
   * @memberof TodayComponent
   */
  public DBTodaySummaries: SummaryItem[] | null = null;

  /**
   * List of staff members from the backend
   *
   * @memberof StandupDetailComponent
   */
  public DBStaffMembers: StaffMemberItem[];

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

  ngOnInit() {
    this.route.data.forEach((data: {
        today: DaysResponse,
        positions: PositionsResponse,
        summaries: SummariesResponse,
        staffMembers: StaffMembersResponse
      }) => {
      this.DBToday = data.today._embedded ? data.today._embedded.days[0] : null;
      this.DBTodayPositions = data.positions ? data.positions._embedded.positions : null;
      this.DBTodaySummaries = data.summaries ? data.summaries._embedded.summaries : null;
      this.DBStaffMembers = data.staffMembers ? data.staffMembers._embedded.staffMembers : null;
    });
  }

}
