import { Component, Input } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Location } from '@angular/common';

import { CurrentStandupService } from '../../local-store/services';

import { StandupsNewEditComponent } from './standups-new-edit.component';

@Component({ selector: 'app-staff-members-list', template: '' })
class StaffMembersListStubComponent {
  @Input() staffMembers;
  @Input() selectorY;
  @Input() selectedStaffMembers;
}

describe('StandupsNewEditComponent', () => {
  let component: StandupsNewEditComponent;
  let fixture: ComponentFixture<StandupsNewEditComponent>;

  beforeEach(async(() => {

    const resolveData = {
      positions: [
        {
          placeIndex: 0,
          staffID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d',
          initials: 'al',
          pickingNext: false
        },
        {
          placeIndex: 1,
          staffID: 'bd55cbf2-9a2a-11e7-979c-cb40e3c89a8d',
          initials: 'jm',
          pickingNext: false
        },
        {
          placeIndex: 2,
          staffID: '4e867850-9c7d-11e7-8b7d-ed5bc8a4a34d',
          initials: 'cm'
        }
      ],
      summaries: [
        {
          orderIndex: 0,
          staffID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d'
        },
        {
          orderIndex: 1,
          staffID: 'bd55cbf2-9a2a-11e7-979c-cb40e3c89a8d'
        },
        {
          orderIndex: 2,
          staffID: '4e867850-9c7d-11e7-8b7d-ed5bc8a4a34d'
        },
      ],
      staffMembers: [
        {
          ID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d',
          firstName: '',
          lastName: '',
          role: 'designer',
          current: false,
          selected: false
        },
        {
          ID: 'bd55cbf2-9a2a-11e7-979c-cb40e3c89a8d',
          firstName: '',
          lastName: '',
          role: 'designer',
          current: false,
          selected: false
        },
        {
          ID: '4e867850-9c7d-11e7-8b7d-ed5bc8a4a34d',
          firstName: '',
          lastName: '',
          role: 'designer',
          current: false,
          selected: false
        }
      ],
      date: new Date()
    };

    const mockActivatedRoute = { data: Observable.of(resolveData) };

    TestBed.configureTestingModule({
      declarations: [ 
        StandupsNewEditComponent,
        StaffMembersListStubComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: {} },
        { provide: CurrentStandupService, useValue: {} },
        { provide: Location, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupsNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
