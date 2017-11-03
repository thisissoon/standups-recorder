import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMemberEditComponent } from './staff-member-edit.component';

describe('StaffMemberEditComponent', () => {
  let component: StaffMemberEditComponent;
  let fixture: ComponentFixture<StaffMemberEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMemberEditComponent ]
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
