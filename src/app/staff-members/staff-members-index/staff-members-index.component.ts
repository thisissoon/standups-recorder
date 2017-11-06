import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { StaffMemberItem, StaffMembersResponse } from '../../api/models';

@Component({
  selector: 'app-staff-members-index',
  templateUrl: './staff-members-index.component.html',
  styleUrls: ['./staff-members-index.component.scss']
})
export class StaffMembersIndexComponent implements OnInit {

  /**
   * List of staff members from the backend
   *
   * @memberof StaffMembersIndexComponent
   */
  public DBStaffMembers: StaffMemberItem[];

  /**
   * List of staff members augmented with selected
   * values
   *
   * @memberof StaffMembersIndexComponent
   */
  public staffMembers: StaffMemberItem[];

  /**
   * tells staff membmer list component where to positions list
   *
   * @memberof StaffMembersIndexComponent
   */
  public selectorY = window.screen.height / 2;

  /**
   * Observable for selected members of staff in
   * staff list child component.
   *
   * @memberof StaffMembersIndexComponent
   */
  public selectedStaffMembers = new Subject();

  /**
   * Creates an instance of StaffMembersIndexComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof StaffMembersIndexComponent
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
   * @memberof StaffMembersIndexComponent
   */
  ngOnInit() {
    this.route.data.forEach((data: { staffMembers: StaffMembersResponse }) => {
      this.DBStaffMembers = data.staffMembers._embedded ? data.staffMembers._embedded.staffMembers : [];
      this.staffMembers = this.DBStaffMembers.map(staffMember => {
        staffMember.selected = false;
        return staffMember;
      });
    });
    this.selectedStaffMembers.subscribe((value: StaffMemberItem) => {
      this.router.navigateByUrl(`staff-members/${value.ID}`);
    });
  }

}
