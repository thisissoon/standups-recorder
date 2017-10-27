import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
   * List of staff members augmented with selected
   * values
   *
   * @memberof TeamComponent
   */
  public staffMembers: StaffMemberItem[];

  /**
   * tells staff membmer list component where to positions list
   *
   * @memberof StandupNewComponent
   */
  public selectorY = window.screen.height / 2;

  /**
   * Observable for selected members of staff in
   * staff list child component.
   *
   * @memberof StandupNewComponent
   */
  public selectedStaffMembers = new Subject();

  /**
   * Creates an instance of TeamComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof TeamComponent
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

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
      this.staffMembers = this.DBStaffMembers.map(staffMember => {
        staffMember.selected = false;
        return staffMember;
      });
    });
    this.selectedStaffMembers.subscribe((value: StaffMemberItem) => {
      this.router.navigateByUrl(`team/${value.ID}`);
    });
  }

}
