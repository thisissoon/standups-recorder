import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { StaffMemberItem, StaffMembersResponse, PositionItem, SummaryItem } from '../../api/models';
import { DayService, PositionService, SummaryService } from '../../api/services';

import { CurrentStandupService } from '../../local-store/services';

@Component({
  selector: 'app-standups-new-edit',
  templateUrl: './standups-new-edit.component.html',
  styleUrls: ['./standups-new-edit.component.scss']
})
export class StandupsNewEditComponent implements OnInit {

  /**
   * List of staff members from the backend
   *
   * @memberof StandupsNewEditComponent
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
   * day ID of stand-up after saving;
   *
   * @memberof StandupsNewEditComponent
   */
  public dayID: string;

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
  public updateCurrentStandupService() {
    this.currentStandupService.setDate(this.date);
    this.currentStandupService.setPositions(this.positions);
    this.currentStandupService.setSummaries(this.summaries);
  }

  /**
   * Converts staff member item into position item and inserts
   * into index provided as argument.
   *
   * @param {$event} StaffMemberItem
   * @memberof StandupsNewEditComponent
   *
   * @method insertStaffMemberIntoPosition
   */
  public insertStaffMemberIntoPosition(value: StaffMemberItem, pickingNextIndex: number) {
    this.positions = this.positions.reduce((acc, element, index) => {
      if (index !== pickingNextIndex) {
        acc.push(element);
        return acc;
      } else {
        element.pickingNext = false;
        acc.push(element, {
          staffID: value.ID,
          initials: `${value.firstName.split('')[0]}${value.lastName.split('')[0]}`
        });
        return acc;
      }
    }, [])
      .map((position, index) => {
        position.placeIndex = index;
        return position;
      });
  }

  /**
   * Saves standup and redirects to detail page
   *
   * @memberof StandupsNewEditComponent
   *
   * @method saveStandup
   */
  public saveStandup() {
    this.dayService.post({date: this.date.toISOString().split('T')[0]})
      .flatMap(response => {
        this.dayID = response._links.day.href.split('/')[2];
        const positions = this.positions.map(position => {
          return this.positionService.post({
            placeIndex: position.placeIndex,
            staffID: position.staffID,
            dayID: this.dayID
          });
        });
        const summaries = this.summaries.map(summary => {
          return this.summaryService.post({
            orderIndex: summary.orderIndex,
            staffID: summary.staffID,
            dayID: this.dayID
          });
        });
        const all = positions.concat(summaries);
        return Observable.merge(...all);
      })
      .subscribe(value => {}, err => {
        console.log(err);
      }, () => {
        this.router.navigateByUrl(`history/${this.dayID}`);
      });
  }

  /**
   * Finds summary with matching staff ID
   *
   * @memberof StandupsNewEditComponent
   *
   * @method summaryIndex
   */
  public getSummary(staffID: string) {
    return this.summaries.find(summary => {
      return summary.staffID === staffID;
    });
  }

  /**
   * Creates an instance of StandupsNewEditComponent.
   *
   * @memberof StandupsNewEditComponent
   */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public currentStandupService: CurrentStandupService,
    public location: Location,
    private dayService: DayService,
    private positionService: PositionService,
    private summaryService: SummaryService
  ) { }

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
   * @memberof StandupsNewEditComponent
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
