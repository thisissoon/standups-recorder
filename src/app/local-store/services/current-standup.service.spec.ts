import { TestBed, inject } from '@angular/core/testing';

import { CurrentStandupService } from './current-standup.service';

describe('CurrentStandupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentStandupService]
    });
  });

  it('should be created', inject([CurrentStandupService], (service: CurrentStandupService) => {
    expect(service).toBeTruthy();
  }));
});
