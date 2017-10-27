import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

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
   * @memberof TeamComponent
   */
  public DBStaffMembers: StaffMemberItem[];

  /**
   * tells staff membmer list component where to positions list
   *
   * @memberof StandupNewComponent
   */
  public selectorY = window.screen.height / 2;

  /**
   * Creates an instance of TeamComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof TeamComponent
   */
  constructor(private route: ActivatedRoute) { }

  /**
   * On init sets staffmembers on component scope.
   * Subscribes to nameScroll observable and updated which name is
   * selected.
   *
   * @memberof TeamComponent
   */
  ngOnInit() {
    this.route.data.forEach((data: { staffMembers: StaffMembersResponse }) => {
      this.DBStaffMembers = data.staffMembers ? data.staffMembers._embedded.staffMembers : null;
    });
  }

}
