import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberDetailsFormComponent } from './staff-member-details-form.component';

describe('StaffMemberDetailsFormComponent', () => {
  let component: StaffMemberDetailsFormComponent;
  let fixture: ComponentFixture<StaffMemberDetailsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMemberDetailsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
