import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaffMemberItem } from '../api/models';

@Component({
  selector: 'app-staff-member-edit',
  templateUrl: './staff-member-edit.component.html',
  styleUrls: ['./staff-member-edit.component.scss']
})
export class StaffMemberEditComponent implements OnInit {

  /**
   * Staff member
   *
   * @memberof StaffMemberDetailComponent
   */
  public staffMember: StaffMemberItem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.forEach((data: { staffMember: StaffMemberItem }) => {
      this.staffMember = data.staffMember;
    });
  }

}
