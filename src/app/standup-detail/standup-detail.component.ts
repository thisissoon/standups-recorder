import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CurrentStandupService } from '../local-store/services';

import {
  PositionsResponse,
  PositionItem,
  SummariesResponse,
  SummaryItem,
  StaffMemberItem,
  StaffMembersResponse,
  DayItem
} from '../api/models';

@Component({
  selector: 'app-standup-detail',
  templateUrl: './standup-detail.component.html',
  styleUrls: ['./standup-detail.component.scss']
})
export class StandupDetailComponent implements OnInit {

  /**
   * URL param map
   *
   * @memberof StandupDetailComponent
   */
  public params: {
    dayID: string;
  };

  /**
   * List of positions filtered on dayID from the backend
   *
   * @memberof StandupDetailComponent
   */
    public DBPositions: PositionItem[];

  /**
   * List of summaries filtered on dayID from the backend
   *
   * @memberof StandupDetailComponent
   */
    public DBSummaries: SummaryItem[];

  /**
   * List of staff members from the backend
   *
   * @memberof StandupDetailComponent
   */
    public DBStaffMembers: StaffMemberItem[];

  /**
   * Currently selected day from backend
   *
   * @memberof StandupDetailComponent
   */
    public DBDay: DayItem;

  /**
   * Date object with this stand-up's date
   *
   * @memberof StandupDetailComponent
   */
    public date: Date;

  /**
   * Update current standup service on click of edit.
   *
   * @param {positions} positions
   * @param {summaries} summaries
   * @memberof HistoryComponent
   *
   * @method renderDiagram
   */
  public updateCurrentStandupService() {
    this.currentStandupService.setDate(this.date);
    this.currentStandupService.setPositions(this.DBPositions);
    this.currentStandupService.setSummaries(this.DBSummaries);
  }

  /**
   * Creates an instance of StandupDetailComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof StandupDetailComponent
   */
  constructor(
    protected route: ActivatedRoute,
    private currentStandupService: CurrentStandupService
  ) {
    route.paramMap.subscribe((value: any) => this.params = value.params);
  }

  ngOnInit() {
    this.route.data.forEach((data: {
      positions: PositionsResponse,
      summaries: SummariesResponse,
      staffMembers: StaffMembersResponse,
      day: DayItem
    }) => {
        this.DBPositions = data.positions._embedded.positions;
        this.DBSummaries = data.summaries._embedded.summaries;
        this.DBStaffMembers = data.staffMembers._embedded.staffMembers;
        this.DBDay = data.day;
        this.date = new Date(`${this.DBDay.date}`);
      });
  }

}
