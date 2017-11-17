import { Directive, Input } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { StaffMemberDetailsFormComponent } from './staff-member-details-form.component';

describe('StaffMemberDetailsFormComponent', () => {
  let component: StaffMemberDetailsFormComponent;
  let fixture: ComponentFixture<StaffMemberDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        StaffMemberDetailsFormComponent
      ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberDetailsFormComponent);
    component = fixture.componentInstance;
    component.staffMember = {
      ID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d',
      firstName: 'alex',
      lastName: 'light',
      role: 'designer',
      current: false
    },
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
