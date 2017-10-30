import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

import { NewStandupService } from './services';

import { PositionItem, SummaryItem } from '../api/models';

@Injectable()
export class NewStandupPositionsResolver implements Resolve<PositionItem[]> {
  /**
   * Creates an instance of NewStandupPositionsResolver.
   * @param {NewStandupService} newStandupService
   * @memberof NewStandupPositionsResolver
   */
  constructor(private newStandupService: NewStandupService) { }

  /**
   * make request to new stand-up service to get positions
   *
   * @returns {PositionItem[]}
   * @memberof NewStandupPositionsResolver
   */
  resolve(): PositionItem[] {
    return this.newStandupService.getPositions();
  }

}

@Injectable()
export class NewStandupSummariesResolver implements Resolve<SummaryItem[]> {
  /**
   * Creates an instance of NewStandupSummariesResolver.
   * @param {NewStandupService} newStandupService
   * @memberof NewStandupSummariesResolver
   */
  constructor(private newStandupService: NewStandupService) { }

  /**
   * make request to new stand-up service to get summaries
   *
   * @returns {SummaryItem[]}
   * @memberof NewStandupSummariesResolver
   */
  resolve(): SummaryItem[] {
    return this.newStandupService.getSummaries();
  }

}

@Injectable()
export class NewStandupDateResolver implements Resolve<Date> {
  /**
   * Creates an instance of NewStandupDateResolver.
   * @param {NewStandupService} newStandupService
   * @memberof NewStandupDateResolver
   */
  constructor(private newStandupService: NewStandupService) { }

  /**
   * make request to new stand-up service to get date
   *
   * @returns {Date}
   * @memberof NewStandupDateResolver
   */
  resolve(): Date {
    return this.newStandupService.getDate();
  }

}
