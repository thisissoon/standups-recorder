import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaffMemberItem, StaffMembersResponse } from '../api/models';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

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
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { staffMembers: StaffMembersResponse }) => {
      this.DBStaffMembers = data.staffMembers ? data.staffMembers._embedded.staffMembers : null;
    });
  }

}
