import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs/Subject';
import 'rxjs/Rx';

import { StaffMemberItem, StaffMembersResponse, PositionItem, SummaryItem } from '../api/models';

import { NewStandupService } from '../local-store/services';

@Component({
  selector: 'app-standups-new',
  templateUrl: './standups-new-edit.component.html',
  styleUrls: ['./standups-new-edit.component.scss']
})
export class StandupsNewEditComponent implements OnInit {

  /**
   * List of staff members from the backend
   *
   * @memberof TeamComponent
   */
  public DBStaffMembers: StaffMemberItem[];

  /**
   * Tracks state of view
   *
   * @memberof StandupsNewEditComponent
   */
  public addingStaff = false;

  /**
   * tells staff membmer list component where to positions list
   *
   * @memberof StandupsNewEditComponent
   */
  public selectorY: number;

  /**
   * First position on screen in absense of any positions in the real list.
   *
   * @memberof StandupsNewEditComponent
   */
  public firstPositionItem: PositionItem = {
    placeIndex: 0,
    staffID: 'n/a',
    pickingNext: false
  };

  /**
   * list of staff members in order of standing.
   *
   * @memberof StandupsNewEditComponent
   */
  public positions: PositionItem[] = [];

  /**
   * list of staff members in order of speaking.
   *
   * @memberof StandupsNewEditComponent
   */
  public summaries: SummaryItem[] = [];

  /**
   * date of stand-up.
   *
   * @memberof StandupsNewEditComponent
   */
  public date: Date;

  /**
   * Observable for selected members of staff in
   * staff list child component.
   *
   * @memberof StandupsNewEditComponent
   */
  public selectedStaffMembers = new Subject();

  /**
   * Handle add click event.
   * Set selectorY position for staff member child component to use.
   * If not adding staff set state to adding staff.
   * Set all nodes.picking next to false apart from current node.
   *
   * @param {$event} $event
   * @memberof StandupsNewEditComponent
   *
   * @method onAddClick
   */
  public onAddClick($event, node: PositionItem) {
    this.selectorY = $event.clientY;
    this.addingStaff = !this.addingStaff ? !this.addingStaff : this.addingStaff;
    this.positions.map(position => {
      position.pickingNext = false;
      return position;
    });
    node.pickingNext = true;
  }

  /**
   * Resets state of line, and posiitons in list.
   *
   * @memberof StandupsNewEditComponent
   *
   * @method notAddingStaff
   */
  public notAddingStaff() {
    this.addingStaff = false;
    this.positions.map(position => {
      position.pickingNext = false;
      return position;
    });
    this.firstPositionItem.pickingNext = false;
  }

  /**
   * Updates new standup service with current data
   *
   * @memberof StandupsNewEditComponent
   *
   * @method onAddClick
   */
  public updateNewStandupService() {
    this.newStandupService.setDate(this.date);
    this.newStandupService.setPositions(this.positions);
    this.newStandupService.setSummaries(this.summaries);
  }

  /**
   * Converts staff member item into position item and inserts
   * into index provided as argument.
   *
   * @param {$event} StaffMemberItem
   * @memberof StandupsNewEditComponent
   *
   * @method onAddClick
   */
  public insertStaffMemberIntoPosition(value: StaffMemberItem, pickingNextIndex: number) {
    this.positions = this.positions.reduce((acc, element, index) => {
      if (index !== pickingNextIndex) {
        acc.push(element);
        return acc;
      } else {
        element.pickingNext = false;
        acc.push(element, {
          placeIndex: this.positions.length,
          staffID: value.ID,
          initials: `${value.firstName.split('')[0]}${value.lastName.split('')[0]}`
        });
        return acc;
      }
    }, []);
  }

  /**
   * Creates an instance of StandupsNewEditComponent.
   *
   * @memberof StandupsNewEditComponent
   */
  constructor(private route: ActivatedRoute, public newStandupService: NewStandupService) { }

  /**
   * Gets resolved data and sets on component scope.
   *
   * Subscribes to observable whos values are staff members provided by child staff
   * member list component.
   *    Removes selected staff member from staff members used by list.
   *    Maps staff member to summary item and pushes into summaries array.
   *    Maps staff member to position item and inserts into appropriate
   *    position depending on which node was clicked.
   *
   * @memberof TeamComponent
   * @method ngOnInit
   */
  ngOnInit() {

    this.route.data.forEach((data: {
      staffMembers: StaffMembersResponse,
      positions: PositionItem[],
      summaries: SummaryItem[],
      date: Date
    }) => {
      this.DBStaffMembers = data.staffMembers ? data.staffMembers._embedded.staffMembers : null;
      this.DBStaffMembers = this.DBStaffMembers.map(staffMember => {
        staffMember.selected = false;
        return staffMember;
      });
      this.positions = data.positions;
      this.summaries = data.summaries;
      this.date = data.date ? data.date : new Date();
    });

    this.selectedStaffMembers.subscribe((value: StaffMemberItem) => {

      this.DBStaffMembers = this.DBStaffMembers.filter(staffMember => {
        return staffMember.ID !== value.ID;
      });

      this.summaries.push({
        orderIndex: this.summaries.length,
        staffID: value.ID
      });

      if (!this.positions.length) {
        this.positions.push({
          placeIndex: 0,
          staffID: value.ID,
          initials: `${value.firstName.split('')[0]}${value.lastName.split('')[0]}`
        });
      } else {
        const pickingNextIndex = this.positions.findIndex(element => {
          return element.pickingNext;
        });
        this.insertStaffMemberIntoPosition(value, pickingNextIndex);
      }

      this.addingStaff = !this.addingStaff;

    });

  }

}
