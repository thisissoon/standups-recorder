import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffMembersIndexComponent } from './staff-members-index.component';

describe('StaffMembersIndexComponent', () => {
  let component: StaffMembersIndexComponent;
  let fixture: ComponentFixture<StaffMembersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffMembersIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffMembersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
