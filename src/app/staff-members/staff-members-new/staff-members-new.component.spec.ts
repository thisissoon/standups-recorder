import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMembersNewComponent } from './staff-members-new.component';

describe('StaffMembersNewComponent', () => {
  let component: StaffMembersNewComponent;
  let fixture: ComponentFixture<StaffMembersNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMembersNewComponent ]
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
