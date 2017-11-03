import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupsIndexComponent } from './standups-index.component';

describe('StandupsIndexComponent', () => {
  let component: StandupsIndexComponent;
  let fixture: ComponentFixture<StandupsIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupsIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
