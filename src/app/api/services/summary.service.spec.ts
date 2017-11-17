import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { SummaryService } from './summary.service';

describe('SummaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [SummaryService]
    });
  });

  it('should be created', inject([SummaryService], (service: SummaryService) => {
    expect(service).toBeTruthy();
  }));
});
