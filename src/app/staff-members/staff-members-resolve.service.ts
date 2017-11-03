import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import { StaffMemberService, PositionService } from '../api/services';

import { StaffMembersResponse, StaffMemberItem, PositionsResponse } from '../api/models';

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

@Injectable()
export class FirstStandUpResolver implements Resolve<PositionsResponse> {
  /**
   * Creates an instance of FirstStandUpResolver.
   * @param {PositionService} positionService
   * @memberof FirstStandUpResolver
   */
  constructor(private positionService: PositionService) { }
  /**
   * make request to positions service to get list of positions
   *
   * @returns {Observable<PositionsResponse>}
   * @memberof FirstStandUpResolver
   */
  resolve(route: ActivatedRouteSnapshot): Observable<PositionsResponse> {
    const params = new HttpParams()
      .set('staffID', route.params['staffMemberID'])
      .set('sort', 'date:asc')
      .set('limit', '1');
    return this.positionService.list(params);
  }

}
