import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import { PositionService } from '../api/services';

import { PositionsResponse } from '../api/models';

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
