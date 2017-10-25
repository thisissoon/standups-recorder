import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { StaffMemberService } from './services';

import { StaffMembersResponse, StaffMemberItem } from './models';

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
    return this.staffMemberService.list();
  }

}

@Injectable()
export class StaffMemberResolver implements Resolve<StaffMemberItem> {
  /**
   * Creates an instance of StaffMemberResolver.
   * @param {StaffMemberService} staffMemberService
   * @memberof StaffMemberResolver
   */
  constructor(private staffMemberService: StaffMemberService) { }
  /**
   * make request to staff member service to get list of staff members
   *
   * @returns {Observable<StaffMemberItem>}
   * @memberof StaffMemberResolver
   */
  resolve(route: ActivatedRouteSnapshot): Observable<StaffMemberItem> {
    return this.staffMemberService.get(route.params['staffMemberID']);
  }

}
