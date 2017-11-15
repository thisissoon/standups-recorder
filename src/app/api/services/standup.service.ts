import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { StandupItem } from '../models';

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
    private http: HttpClient
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
      .catch(err => Observable.throw(err));
  }
}
