import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupNewEditComponent } from './standup-new.component';

describe('StandupNewEditComponent', () => {
  let component: StandupNewEditComponent;
  let fixture: ComponentFixture<StandupNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
