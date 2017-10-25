import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaffMemberItem, PositionsResponse } from '../api/models';

@Component({
  selector: 'app-staff-member-detail',
  templateUrl: './staff-member-detail.component.html',
  styleUrls: ['./staff-member-detail.component.scss']
})
export class StaffMemberDetailComponent implements OnInit {

  /**
   * Staff member
   *
   * @memberof StaffMemberDetailComponent
   */
  public staffMember: StaffMemberItem;

  /**
   * Creates an instance of StaffMemberDetailComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof StaffMemberDetailComponent
   */
  constructor(protected route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { staffMember: StaffMemberItem }) => {
      this.staffMember = data.staffMember;
    });
  }

}
