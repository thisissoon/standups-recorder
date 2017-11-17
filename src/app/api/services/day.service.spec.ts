import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { DayService } from './day.service';

describe('DayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [DayService]
    });
  });

  it('should be created', inject([DayService], (service: DayService) => {
    expect(service).toBeTruthy();
  }));
});
