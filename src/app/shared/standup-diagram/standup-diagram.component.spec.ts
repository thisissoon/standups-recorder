import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupDiagramComponent } from './standup-diagram.component';

describe('StandupDiagramComponent', () => {
  let component: StandupDiagramComponent;
  let fixture: ComponentFixture<StandupDiagramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupDiagramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupDiagramComponent);
    component = fixture.componentInstance;
    component.width = 0;
    component.positions = [
      {
        placeIndex: 0,
        staffID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d',
        initials: 'al',
        pickingNext: false
      },
      {
        placeIndex: 1,
        staffID: 'bd55cbf2-9a2a-11e7-979c-cb40e3c89a8d',
        initials: 'jm',
        pickingNext: false
      },
      {
        placeIndex: 2,
        staffID: '4e867850-9c7d-11e7-8b7d-ed5bc8a4a34d',
        initials: 'cm'
      }
    ];
    component.summaries = [
      {
        orderIndex: 0,
        staffID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d'
      },
      {
        orderIndex: 1,
        staffID: 'bd55cbf2-9a2a-11e7-979c-cb40e3c89a8d'
      },
      {
        orderIndex: 2,
        staffID: '4e867850-9c7d-11e7-8b7d-ed5bc8a4a34d'
      },
    ];
    component.staffMembers = [
      {
        ID: 'bd549371-9a2a-11e7-979c-cb40e3c89a8d',
        firstName: '',
        lastName: '',
        role: 'designer',
        current: false,
        selected: false
      },
      {
        ID: 'bd55cbf2-9a2a-11e7-979c-cb40e3c89a8d',
        firstName: '',
        lastName: '',
        role: 'designer',
        current: false,
        selected: false
      },
      {
        ID: '4e867850-9c7d-11e7-8b7d-ed5bc8a4a34d',
        firstName: '',
        lastName: '',
        role: 'designer',
        current: false,
        selected: false
      }
    ];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
