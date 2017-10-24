import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { DayService, PositionService, SummaryService } from '../api/services';

import { DaysResponse, PositionsResponse, SummariesResponse } from '../api/models';

@Injectable()
export class TodayResolver implements Resolve<DaysResponse> {
  /**
   * Creates an instance of DayResolver.
   * @param {DayService} dayService
   * @memberof DayResolver
   */
  constructor(private dayService: DayService) { }
  /**
   * make request to staff member service to get list of staff members
   *
   * @returns {Observable<DaysResponse[]>}
   * @memberof DayResolver
   */
  resolve(): Observable<DaysResponse> {
    const params = new HttpParams()
      .set('date', new Date().toISOString().split('T')[0]);
    return this.dayService.list(params);
  }
}

@Injectable()
export class TodayPositionsResolver implements Resolve<Observable<PositionsResponse>> {
  /**
   * Creates an instance of TodayPositionsResolver.
   * @param {DayService} dayService
   * @param {PositionService} positionService
   * @memberof TodayPositionsResolver
   */
  constructor(
    private dayService: DayService,
    private positionService: PositionService
  ) { }
  /**
   * make request to positions service for positions with
   * today's dayID.
   *
   * @returns {Observable<PositionsResponse>}
   * @memberof TodayPositionsResolver
   */
  resolve(): Observable<Observable<PositionsResponse>> {
     let params = new HttpParams()
      .set('date', new Date().toISOString().split('T')[0]);
    return this.dayService.list(params)
      .flatMap((response: DaysResponse) => {
        params = new HttpParams();
        if (response._embedded) {
          params.set('dayID', response._embedded.days[0].ID);
        }
        return this.positionService.list(params);
      });
  }
}

@Injectable()
export class TodaySummariesResolver implements Resolve<Observable<SummariesResponse>> {
  /**
   * Creates an instance of TodaySummariesResolver.
   * @param {DayService} dayService
   * @param {SummaryService} summaryService
   * @memberof TodaySummariesResolver
   */
  constructor(
    private dayService: DayService,
    private summaryService: SummaryService
  ) { }
  /**
   * make request to summary service for summaries with
   * today's dayID.
   *
   * @returns {Observable<SummariesResponse>}
   * @memberof TodaySummariesResolver
   */
  resolve(): Observable<Observable<SummariesResponse>> {
     let params = new HttpParams()
      .set('date', new Date().toISOString().split('T')[0]);
    return this.dayService.list(params)
      .flatMap((response: DaysResponse) => {
        params = new HttpParams();
        if (response._embedded) {
          params.set('dayID', response._embedded.days[0].ID);
        }
        return this.summaryService.list(params);
      });
  }
}

