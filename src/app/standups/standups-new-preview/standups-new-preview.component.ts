import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { StaffMemberItem, StaffMembersResponse, PositionItem, SummaryItem } from '../../api/models';
import { StandupService } from '../../api/services';

import { CurrentStandupService } from '../../local-store/services';

import { AlertService } from '../../shared/alerts/alert.service';

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
    this.standupService
    .post({
      date: this.date.toISOString().split('T')[0],
      positions: this.positions.map(position => {
        return {
          placeIndex: position.placeIndex,
          staffID: position.staffID
        };
      }),
      summaries: this.summaries.map(summary => {
        return {
          orderIndex: summary.orderIndex,
          staffID: summary.staffID
        };
      })
    })
    .subscribe(value => {
      this.router.navigateByUrl(`standups/${this.dayID}`);
    }, err => {
      this.alertService.add({
        type: 'error',
        msg: 'stand-up not saved',
        duration: 5000
      });
    });
  }

  /**
   * Flips the order of positions to correct for them being
   * recorded in a counter clockwise direction.
   *
   * @memberof StandupsNewEditComponent
   *
   * @method flipPositions
   */
  public flipPositions(): void {
    this.positions.reverse();
    this.positions = this.positions.map((element, index) => {
      element.placeIndex = index;
      return element;
    });
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public standupService: StandupService,
    public currentStandupService: CurrentStandupService,
    public alertService: AlertService
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
