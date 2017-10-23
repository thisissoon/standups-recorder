import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { DayService } from '../api/services';
import { DaysResponse } from '../api/models';


@Injectable()
export class DaysResolver implements Resolve<DaysResponse[]> {
  /**
   * Creates an instance of DaysResolver.
   * @param {QuestionsService} dayService
   * @memberof DaysResolver
   */
  constructor(private dayService: DayService) { }
  /**
   * make request to day service to get list of days
   *
   * @returns {Observable<DaysResponse[]>}
   * @memberof DaysResolver
   */
  resolve(): Observable<DaysResponse[]> {
    return this.dayService.list();
  }

}
