import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { StaffMemberService } from './staff-member.service';

describe('StaffMemberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [StaffMemberService]
    });
  });

  it('should be created', inject([StaffMemberService], (service: StaffMemberService) => {
    expect(service).toBeTruthy();
  }));
});
