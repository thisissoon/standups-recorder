import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberDetailComponent } from './staff-member-detail.component';

describe('StaffMemberDetailComponent', () => {
  let component: StaffMemberDetailComponent;
  let fixture: ComponentFixture<StaffMemberDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMemberDetailComponent ]
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
