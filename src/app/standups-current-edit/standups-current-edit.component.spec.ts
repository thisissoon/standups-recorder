import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupsCurrentEditComponent } from './standups-current-edit.component';

describe('StandupsCurrentEditComponent', () => {
  let component: StandupsCurrentEditComponent;
  let fixture: ComponentFixture<StandupsCurrentEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupsCurrentEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupsCurrentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
