import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupsNewPreviewComponent } from './standups-new-preview.component';

describe('StandupsNewPreviewComponent', () => {
  let component: StandupsNewPreviewComponent;
  let fixture: ComponentFixture<StandupsNewPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupsNewPreviewComponent ]
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
