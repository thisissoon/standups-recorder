import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { StaffMemberItem, StaffMembersResponse, PositionItem, SummaryItem } from '../api/models';
import { DayService, PositionService, SummaryService } from '../api/services';

import { CurrentStandupService } from '../local-store/services';

@Component({
  selector: 'app-standups-new-preview',
  templateUrl: './standups-new-preview.component.html',
  styleUrls: ['./standups-new-preview.component.scss']
})
export class StandupsNewPreviewComponent implements OnInit {

  /**
   * List of staff members from the backend
   *
   * @memberof StandupsNewPreviewComponent
   */
  public DBStaffMembers: StaffMemberItem[];

  /**
   * list of staff members in order of standing.
   *
   * @memberof StandupsNewPreviewComponent
   */
  public positions: PositionItem[] = [];

  /**
   * list of staff members in order of speaking.
   *
   * @memberof StandupsNewPreviewComponent
   */
  public summaries: SummaryItem[] = [];

  /**
   * date of stand-up.
   *
   * @memberof StandupsNewPreviewComponent
   */
  public date: Date;

  /**
   * day ID of stand-up after saving;
   *
   * @memberof StandupsNewEditComponent
   */
  public dayID: string;

  /**
   * Saves standup and redirects to detail page
   *
   * @memberof StandupsNewEditComponent
   *
   * @method saveStandup
   */
  public saveStandup() {
    this.dayService.post({ date: this.date.toISOString().split('T')[0] })
      .flatMap(response => {
        this.dayID = response._links.day.href.split('/')[2];
        const positions = this.positions.map(position => {
          return this.positionService.post({
            placeIndex: position.placeIndex,
            staffID: position.staffID,
            dayID: this.dayID
          });
        });
        const summaries = this.summaries.map(summary => {
          return this.summaryService.post({
            orderIndex: summary.orderIndex,
            staffID: summary.staffID,
            dayID: this.dayID
          });
        });
        const all = positions.concat(summaries);
        return Observable.merge(...all);
      })
      .subscribe(value => { }, err => {
        console.log(err);
      }, () => {
        this.router.navigateByUrl(`history/${this.dayID}`);
      });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dayService: DayService,
    private positionService: PositionService,
    private summaryService: SummaryService,
    public currentStandupService: CurrentStandupService
  ) { }

  ngOnInit() {
    this.route.data.forEach((data: {
      staffMembers: StaffMembersResponse,
      positions: PositionItem[],
      summaries: SummaryItem[],
      date: Date
    }) => {
      this.DBStaffMembers = data.staffMembers ? data.staffMembers._embedded.staffMembers : null;
      this.positions = data.positions;
      this.summaries = data.summaries;
      this.date = data.date;
    });
  }

}
