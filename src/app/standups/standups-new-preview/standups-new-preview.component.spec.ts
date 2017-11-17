import { Component, Input } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CurrentStandupService } from '../../local-store/services';
import { StandupService } from '../../api/services';
import { AlertService } from '../../shared/alerts/alert.service';

import { StandupsNewPreviewComponent } from './standups-new-preview.component';

@Component({ selector: 'app-standup-diagram', template: '' })
class StandupDiagramStubComponent {
  @Input() width;
  @Input() positions;
  @Input() summaries;
  @Input() staffMembers;
}

describe('StandupsNewPreviewComponent', () => {
  let component: StandupsNewPreviewComponent;
  let fixture: ComponentFixture<StandupsNewPreviewComponent>;

  beforeEach(async(() => {

    const resolveData = {
      positions: [
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
      ],
      summaries: [
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
      ],
      staffMembers: [
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
      ],
      date: new Date()
    };

    const mockActivatedRoute = { data: Observable.of(resolveData) };

    TestBed.configureTestingModule({
      declarations: [ 
        StandupsNewPreviewComponent,
        StandupDiagramStubComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: {} },
        { provide: CurrentStandupService, useValue: {} },
        { provide: StandupService, useValue: {} },
        { provide: AlertService, useValue: {} }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupsNewPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
