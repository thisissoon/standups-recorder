import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaffMemberItem, StaffMembersResponse, PositionItem, SummaryItem } from '../api/models';

@Component({
  selector: 'app-standups-new-preview',
  templateUrl: './standups-new-preview.component.html',
  styleUrls: ['./standups-new-preview.component.scss']
})
export class StandupsNewPreviewComponent implements OnInit {

  /**
   * List of staff members from the backend
   *
   * @memberof TeamComponent
   */
  public DBStaffMembers: StaffMemberItem[];

  /**
   * list of staff members in order of standing.
   *
   * @memberof StandupsNewEditComponent
   */
  public positions: PositionItem[] = [];

  /**
   * list of staff members in order of speaking.
   *
   * @memberof StandupsNewEditComponent
   */
  public summaries: SummaryItem[] = [];

  /**
   * date of stand-up.
   *
   * @memberof StandupsNewEditComponent
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
  }

}
