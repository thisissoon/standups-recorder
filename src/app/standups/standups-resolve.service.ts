import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import { StaffMemberService } from '../api/services';

import { StaffMembersResponse } from '../api/models';

import { ErrorService } from '../errors/error.service';

@Injectable()
export class StaffMembersResolver implements Resolve<StaffMembersResponse> {
  /**
   * Creates an instance of StaffMembersResolver.
   * @param {StaffMemberService} staffMemberService
   * @memberof StaffMembersResolver
   */
  constructor(
    private staffMemberService: StaffMemberService,
    private errorService: ErrorService
  ) { }
  /**
   * make request to staff member service to get list of staff members
   *
   * @returns {Observable<StaffMembersResponse>}
   * @memberof StaffMembersResolver
   */
  resolve(): Observable<StaffMembersResponse> {
    const params = new HttpParams()
      .set('sort', 'firstName:asc');
    return this.staffMemberService.list(params)
      .catch(err => this.errorService.handleError(err));
  }

}
