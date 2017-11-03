import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import { StaffMemberService } from '../api/services';

import { StaffMembersResponse } from '../api/models';

@Injectable()
export class StaffMembersResolver implements Resolve<StaffMembersResponse> {
  /**
   * Creates an instance of StaffMembersResolver.
   * @param {StaffMemberService} staffMemberService
   * @memberof StaffMembersResolver
   */
  constructor(private staffMemberService: StaffMemberService) { }
  /**
   * make request to staff member service to get list of staff members
   *
   * @returns {Observable<StaffMembersResponse>}
   * @memberof StaffMembersResolver
   */
  resolve(): Observable<StaffMembersResponse> {
    const params = new HttpParams()
      .set('sort', 'firstName:asc');
    return this.staffMemberService.list(params);
  }

}
