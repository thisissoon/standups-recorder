import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupNewComponent } from './standup-new.component';

describe('StandupNewComponent', () => {
  let component: StandupNewComponent;
  let fixture: ComponentFixture<StandupNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
