import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { StaffMemberItem, StaffMembersResponse, PositionItem, SummaryItem } from '../api/models';

@Component({
  selector: 'app-standups-current-preview',
  templateUrl: './standups-current-preview.component.html',
  styleUrls: ['./standups-current-preview.component.scss']
})
export class StandupsCurrentPreviewComponent implements OnInit {

  /**
   * List of staff members from the backend
   *
   * @memberof TeamComponent
   */
  public DBStaffMembers: StaffMemberItem[];

  /**
   * list of staff members in order of standing.
   *
   * @memberof StandupsCurrentEditComponent
   */
  public positions: PositionItem[] = [];

  /**
   * list of staff members in order of speaking.
   *
   * @memberof StandupsCurrentEditComponent
   */
  public summaries: SummaryItem[] = [];

  /**
   * dayID of date of standup
   *
   * @memberof StandupsCurrentEditComponent
   */
  public dayID: string;

  /**
   * date of stand-up.
   *
   * @memberof StandupsCurrentEditComponent
   */
  public date: Date;

  constructor(private route: ActivatedRoute) { }

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

    this.route.params.subscribe((params: HttpParams) => {
      this.dayID = params['dayID'];
    });

  }

}
