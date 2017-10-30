import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { DayItem, DaysResponse } from '../models';

@Injectable()
export class DayService {
  /**
   * Current end point url
   *
   * @private
   * @memberof DayService
   */
  private endpointUrl = `${environment.apiUrl}/days`;
  /**
   * Creates an instance of DayService.
   * @param {HttpClient} http
   *
   * @memberof DayService
   */
  constructor(private http: HttpClient) { }
  /**
   * Returns the matching position
   *
   * @returns {Observable<DayItem>}
   * @memberof DayService
   */
  public get(dayID): Observable<DayItem> {
    return this.http.get<DayItem>(`${this.endpointUrl}/${dayID}`);
  }
  /**
   * Returns the matching positions
   *
   * @returns {Observable<DaysResponse>}
   * @memberof DayService
   */
  public list(params: HttpParams = new HttpParams()): Observable<any> {
    const options: any = { params, observe: 'body' };
    return this.http.get<DaysResponse[]>(`${this.endpointUrl}?sort=date:desc`, options);
  }
  /**
   * Submit day.
   *
   * @param {*} data
   * @returns {Observable<any>}
   * @memberof DayService
   */
  public post(data: any): Observable<any> {
    return this.http.post(`${this.endpointUrl}`, data);
  }
}
