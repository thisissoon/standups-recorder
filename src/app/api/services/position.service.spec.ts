import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { PositionService } from './position.service';

describe('PositionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [PositionService]
    });
  });

  it('should be created', inject([PositionService], (service: PositionService) => {
    expect(service).toBeTruthy();
  }));
});
