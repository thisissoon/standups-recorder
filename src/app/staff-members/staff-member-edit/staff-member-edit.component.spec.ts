import { Component, Directive, Input } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'

import { StaffMemberEditComponent } from './staff-member-edit.component';

import { StaffMemberService } from '../../api/services'
import { AlertService } from '../../shared/alerts/alert.service'

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
}

@Component({ selector: 'app-staff-member-details-form', template: '' })
class StaffMemberDetailsFormStubComponent { 
  @Input() form;
  @Input() staffMember;
}

describe('StaffMemberEditComponent', () => {
  let component: StaffMemberEditComponent;
  let fixture: ComponentFixture<StaffMemberEditComponent>;

  beforeEach(async(() => {

    const resolveData = {
      staffMember: {
        ID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d',
        firstName: '',
        lastName: '',
        role: 'designer',
        current: false
      }
    };

    const mockActivatedRoute = { data: Observable.of(resolveData) };

    TestBed.configureTestingModule({
      declarations: [ 
        StaffMemberEditComponent,
        RouterLinkStubDirective,
        StaffMemberDetailsFormStubComponent
       ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: StaffMemberService, useValue: {} },
        { provide: Router, useValue: {} },
        { provide: AlertService, useValue: {} },
        FormBuilder
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
