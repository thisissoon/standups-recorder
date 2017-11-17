import { Component, Input } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms'
import { Router } from '@angular/router'

import { StaffMemberService } from '../../api/services';
import { AlertService } from '../../shared/alerts/alert.service';

import { StaffMembersNewComponent } from './staff-members-new.component';

@Component({ selector: 'app-staff-member-details-form', template: '' })
class StaffMemberDetailsFormStubComponent {
  @Input() form;
  @Input() staffMember;
}

describe('StaffMembersNewComponent', () => {
  let component: StaffMembersNewComponent;
  let fixture: ComponentFixture<StaffMembersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        StaffMembersNewComponent,
        StaffMemberDetailsFormStubComponent
      ],
      providers: [
        FormBuilder,
        { provide: StaffMemberService, useValue: {}},
        { provide: Router, useValue: {}},
        { provide: AlertService, useValue: {}}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMembersNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
