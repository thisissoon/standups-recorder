import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StandupService } from './standup.service';

describe('StandupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StandupService]
    });
  });

  it('should be created', inject([StandupService], (service: StandupService) => {
    expect(service).toBeTruthy();
  }));
});
