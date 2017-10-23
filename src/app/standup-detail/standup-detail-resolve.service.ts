import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpParams } from '@angular/common/http';

import { PositionService, SummaryService } from '../api/services';

import { PositionsResponse, SummariesResponse } from '../api/models';


@Injectable()
export class PositionsResolver implements Resolve<PositionsResponse[]> {
  /**
   * Creates an instance of PositionsResolver.
   * @param {QuestionsService} positionService
   * @memberof PositionsResolver
   */
  constructor(private positionService: PositionService) { }
  /**
   * make request to position service to get list of positions
   * filtered by dayID
   *
   * @returns {Observable<DaysResponse[]>}
   * @memberof PositionsResolver
   */
  resolve(route: ActivatedRouteSnapshot): Observable<PositionsResponse[]> {
    const params = new HttpParams()
      .set('dayID', route.params['dayID'])
      .set('sort', 'placeIndex:asc');
    return this.positionService.list(params);
  }

}

@Injectable()
export class SummariesResolver implements Resolve<SummariesResponse[]> {
  /**
   * Creates an instance of SummariesResolver.
   * @param {QuestionsService} summaryService
   * @memberof SummariesResolver
   */
  constructor(private summaryService: SummaryService) { }
  /**
   * make request to summary service to get list of summaries
   * filtered by dayID
   *
   * @returns {Observable<DaysResponse[]>}
   * @memberof SummariesResolver
   */
  resolve(route: ActivatedRouteSnapshot): Observable<SummariesResponse[]> {
    const params = new HttpParams()
      .set('dayID', route.params['dayID'])
      .set('sort', 'orderIndex:asc');
    return this.summaryService.list(params);
  }

}
