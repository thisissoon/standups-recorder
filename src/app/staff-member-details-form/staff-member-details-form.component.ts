import { Component, OnInit, Input } from '@angular/core';

import { StaffMemberItem } from '../api/models';

@Component({
  selector: 'app-staff-member-details-form',
  templateUrl: './staff-member-details-form.component.html',
  styleUrls: ['./staff-member-details-form.component.scss']
})
export class StaffMemberDetailsFormComponent implements OnInit {

  /**
   * Staff member to edit
   *
   * @memberof FooterNavComponent
   */
  @Input() staffMember: StaffMemberItem;

  constructor() { }

  ngOnInit() {
  }

}
