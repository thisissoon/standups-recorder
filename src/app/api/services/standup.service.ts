import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { StandupItem } from '../models';

import { AlertService } from '../../shared/alerts/alert.service';

@Injectable()
export class StandupService {
  /**
   * Current end point url
   *
   * @private
   * @memberof DayService
   */
  private endpointUrl = `${environment.apiUrl}/standups`;

  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }

  /**
   * Submit day.
   *
   * @param {*} data
   * @returns {Observable<any>}
   * @memberof DayService
   */
  public post(data: StandupItem): Observable<any> {
    return this.http.post(`${this.endpointUrl}`, data)
      .catch(err => {
        this.alertService.add({
          type: 'error',
          duration: 10000,
          msg: 'stand-up not saved'
        });
        return Observable.throw(err);
      });
  }
}
