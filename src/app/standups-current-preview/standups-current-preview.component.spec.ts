import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandupsCurrentPreviewComponent } from './standups-current-preview.component';

describe('StandupsCurrentPreviewComponent', () => {
  let component: StandupsCurrentPreviewComponent;
  let fixture: ComponentFixture<StandupsCurrentPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandupsCurrentPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupsCurrentPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
