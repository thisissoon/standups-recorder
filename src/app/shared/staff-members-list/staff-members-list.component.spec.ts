import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMembersListComponent } from './staff-members-list.component';

describe('StaffMembersListComponent', () => {
  let component: StaffMembersListComponent;
  let fixture: ComponentFixture<StaffMembersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMembersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMembersListComponent);
    component = fixture.componentInstance;
    component.staffMembers = [
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
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
