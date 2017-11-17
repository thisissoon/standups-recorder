import { TestBed, inject } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

import { ErrorService } from './error.service';

describe('ErrorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ErrorService,
        { provide: Router, useValue: {} }
      ]
    });
  });

  it('should be created', inject([ErrorService], (service: ErrorService) => {
    expect(service).toBeTruthy();
  }));
});
