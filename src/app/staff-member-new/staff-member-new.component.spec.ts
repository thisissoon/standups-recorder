import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberNewComponent } from './staff-member-new.component';

describe('StaffMemberNewComponent', () => {
  let component: StaffMemberNewComponent;
  let fixture: ComponentFixture<StaffMemberNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMemberNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMemberNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
