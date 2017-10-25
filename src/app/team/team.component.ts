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
   * List of staff members
   *
   * @memberof TeamComponent
   */
  public staffMembers: StaffMemberItem[];

  /**
   * Observable for staff member list scroll events
   *
   * @memberof TeamComponent
   */
  public nameScroll = new Subject();

  /**
   * Height of staff member list items
   *
   * @memberof TeamComponent
   */
  public staffMemberListItemHeight = 100;

  /**
   * Creates an instance of TeamComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof TeamComponent
   */
  constructor(private route: ActivatedRoute) { }

  /**
   * Event listener for staffmember list scroll event.
   * Scroll value rebased to
   * --0--staff-name,
   * --25,
   * --50
   * --75,
   * --0--staff-name,
   * --25,
   * --50
   * --75,
   * --0--staff-name
   * If 0 push scroll event rebased to match index of a staff member list item.
   * If 25 push null so all staff deselected.
   * If 75 push scroll event to match index of staff list item.
   *
   * @method onStaffScroll
   * @param {$event} $event
   *
   * @memberof TeamComponent
   */
  onStaffScroll($event) {
    if (Math.floor(($event.target.scrollTop - $event.target.scrollTop % 25) % this.staffMemberListItemHeight) === 0) {
      this.nameScroll.next(Math.floor(($event.target.scrollTop + (this.staffMemberListItemHeight / 2)) / this.staffMemberListItemHeight));
    } else if (Math.floor(($event.target.scrollTop - $event.target.scrollTop % 25) % this.staffMemberListItemHeight) === 25) {
      this.nameScroll.next(null);
    } else if (Math.floor(($event.target.scrollTop - $event.target.scrollTop % 25) % this.staffMemberListItemHeight) === 75) {
      this.nameScroll.next(Math.floor(($event.target.scrollTop + (this.staffMemberListItemHeight / 2)) / this.staffMemberListItemHeight));
    }
  }

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
      this.staffMembers[0].selected = true;
    });

  /**
   * Value is scroll event value rebased to appropriate index.
   * If value matches index set selected to true
   *
   */
  this.nameScroll
    .distinctUntilChanged()
    .subscribe(value => {
      this.staffMembers = this.staffMembers.map((staffMember, index) => {
        staffMember.selected = (index === value);
        return staffMember;
      });
    });

  }

}
