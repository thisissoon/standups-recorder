import { TestBed, inject } from '@angular/core/testing';

import { NewStandupService } from './new-standup.service';

describe('NewStandupService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NewStandupService]
    });
  });

  it('should be created', inject([NewStandupService], (service: NewStandupService) => {
    expect(service).toBeTruthy();
  }));
});
