import { Component, Directive, Input } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { StaffMemberDetailComponent } from './staff-member-detail.component';

@Component({ selector: 'app-footer-nav', template: '' })
class FooterNavStubComponent { }

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
}

describe('StaffMemberDetailComponent', () => {
  let component: StaffMemberDetailComponent;
  let fixture: ComponentFixture<StaffMemberDetailComponent>;

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
        StaffMemberDetailComponent,
        RouterLinkStubDirective,
        FooterNavStubComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
