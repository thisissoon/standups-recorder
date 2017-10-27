import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { StaffMemberItem } from '../api/models';

@Component({
  selector: 'app-staff-members-list',
  templateUrl: './staff-members-list.component.html',
  styleUrls: ['./staff-members-list.component.scss']
})
export class StaffMembersListComponent implements OnInit {

  /**
   * List of staff members
   *
   * @memberof TeamComponent
   */
  @Input() staffMembers: StaffMemberItem[];

  /**
   * How much to shift list down by to align with selector
   *
   * @memberof StaffMembersListComponent
   */
  @Input() selectorY: number;

  /**
   * Parent component observable for selected members of staff in
   * staff list.
   *
   * @memberof StaffMembersListComponent
   */
  @Input() selectedStaffMembers: Subject<any>;

  /**
   * Height of item in list. Used with selectorY to position list inline
   * with selector of parent element.
   *
   * @memberof TeamComponent
   */
  public staffItemHeight = 100;

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
   * Click event listener for staff members.
   * If staff member selected pushed staffMember ocject
   * into parent component observable stream.
   *
   * @method staffMemberClickHandler
   * @param {$event} $event
   * @param {staffMember} staffMember
   *
   * @memberof TeamComponent
   */
  staffMemberClickHandler($event, staffMember: StaffMemberItem) {
    if (staffMember.selected) {
      this.selectedStaffMembers.next(staffMember);
    }
  }

  constructor() { }

  ngOnInit() {

    this.staffMembers[0].selected = true;

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
