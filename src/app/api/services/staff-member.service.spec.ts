import { TestBed, inject } from '@angular/core/testing';

import { StaffMemberService } from './staff-member.service';

describe('StaffMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaffMemberService]
    });
  });

  it('should be created', inject([StaffMemberService], (service: StaffMemberService) => {
    expect(service).toBeTruthy();
  }));
});
