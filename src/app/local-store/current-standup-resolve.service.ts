import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import { CurrentStandupService } from './services';

import { PositionItem, SummaryItem } from '../api/models';

@Injectable()
export class CurrentStandupPositionsResolver implements Resolve<PositionItem[]> {
  /**
   * Creates an instance of CurrentStandupPositionsResolver.
   * @param {currentStandupService} CurrentStandupService
   * @memberof CurrentStandupPositionsResolver
   */
  constructor(private currentStandupService: CurrentStandupService) { }

  /**
   * make request to new stand-up service to get positions
   *
   * @returns {PositionItem[]}
   * @memberof CurrentStandupPositionsResolver
   */
  resolve(): PositionItem[] {
    return this.currentStandupService.getPositions();
  }

}

@Injectable()
export class CurrentStandupSummariesResolver implements Resolve<SummaryItem[]> {
  /**
   * Creates an instance of CurrentStandupSummariesResolver.
   * @param {currentStandupService} CurrentStandupService
   * @memberof CurrentStandupSummariesResolver
   */
  constructor(private currentStandupService: CurrentStandupService) { }

  /**
   * make request to new stand-up service to get summaries
   *
   * @returns {SummaryItem[]}
   * @memberof CurrentStandupSummariesResolver
   */
  resolve(): SummaryItem[] {
    return this.currentStandupService.getSummaries();
  }

}

@Injectable()
export class CurrentStandupDateResolver implements Resolve<Date> {
  /**
   * Creates an instance of CurrentStandupDateResolver.
   * @param {currentStandupService} CurrentStandupService
   * @memberof CurrentStandupDateResolver
   */
  constructor(private currentStandupService: CurrentStandupService) { }

  /**
   * make request to new stand-up service to get date
   *
   * @returns {Date}
   * @memberof CurrentStandupDateResolver
   */
  resolve(): Date {
    return this.currentStandupService.getDate();
  }

}
