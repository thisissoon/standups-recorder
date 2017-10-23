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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
