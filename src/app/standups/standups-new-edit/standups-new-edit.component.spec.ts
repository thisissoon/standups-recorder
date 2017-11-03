import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupsNewEditComponent } from './standups-new-edit.component';

describe('StandupsNewEditComponent', () => {
  let component: StandupsNewEditComponent;
  let fixture: ComponentFixture<StandupsNewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupsNewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupsNewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
