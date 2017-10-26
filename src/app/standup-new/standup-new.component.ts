export interface Node {
  firstEvent: boolean;
  inViewport: boolean;
  pickingNext: boolean;
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { StaffMemberItem, StaffMembersResponse } from '../api/models';

@Component({
  selector: 'app-standup-new',
  templateUrl: './standup-new.component.html',
  styleUrls: ['./standup-new.component.scss']
})
export class StandupNewComponent implements OnInit {


  /**
   * List of staff members from the backend
   *
   * @memberof TeamComponent
   */
  public DBStaffMembers: StaffMemberItem[];


  /**
   * List of staff members
   *
   * @memberof TeamComponent
   */
  public staffMembers: StaffMemberItem[];

  /**
   * Tracks state of view
   *
   * @memberof StandupNewComponent
   */
  public addingStaff = false;

  /**
   * First node on screen in absense of any elements in the list.
   *
   * @memberof StandupNewComponent
   */
  public firstNode: Node = {
    firstEvent: true,
    inViewport: false,
    pickingNext: false
  };

  /**
   * Creates an instance of StandupNewComponent.
   *
   * @memberof StandupNewComponent
   */
  constructor(private route: ActivatedRoute) { }

  /**
   * Handel add click event
   *
   * @param {$event} $event
   * @memberof StandupNewComponent
   *
   * @method onAddClick
   */
  public onAddClick($event, node: Node) {
    this.addingStaff = !this.addingStaff;
    node.pickingNext = !node.pickingNext;
  }

  /**
   * comments
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
  }

}
