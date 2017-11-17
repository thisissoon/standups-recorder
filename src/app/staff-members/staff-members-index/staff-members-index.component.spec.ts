import { Component, Input } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';

import { StaffMembersIndexComponent } from './staff-members-index.component';

@Component({ selector: 'app-staff-members-list', template: '' })
class StaffMembersListStubComponent {
  @Input() staffMembers;
  @Input() selectorY;
  @Input() selectedStaffMembers;
}

@Component({ selector: 'app-footer-nav', template: '' })
class FooterNavStubComponent {
  @Input() gradient;
}

describe('StaffMembersIndexComponent', () => {
  let component: StaffMembersIndexComponent;
  let fixture: ComponentFixture<StaffMembersIndexComponent>;

  beforeEach(async(() => {

    const resolveData = {
      staffMembers: {
        _embedded: {
          staffMembers: [
            {
              ID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d',
              firstName: '',
              lastName: '',
              role: 'designer',
              current: false
            }
          ]
        }
      }
    };

    const mockActivatedRoute = { data: Observable.of(resolveData) };
    
    TestBed.configureTestingModule({
      declarations: [ 
        StaffMembersIndexComponent,
        StaffMembersListStubComponent,
        FooterNavStubComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMembersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
