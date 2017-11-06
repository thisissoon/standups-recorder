import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { SummaryItem, SummariesResponse } from '../models';

import { AlertService } from '../../shared/alerts/alert.service';

@Injectable()
export class SummaryService {
  /**
   * Current end point url
   *
   * @private
   * @memberof CurrentService
   */
  private endpointUrl = `${environment.apiUrl}/summaries`;
  /**
   * Creates an instance of SummaryService.
   * @param {HttpClient} http
   *
   * @memberof SummaryService
   */
  constructor(
    private http: HttpClient,
    private alertService: AlertService
  ) { }
  /**
   * Returns the matching summary
   *
   * @returns {Observable<SummaryItem>}
   * @memberof CurrentService
   */
  public get(summaryID): Observable<SummaryItem> {
    return this.http.get<SummaryItem>(`${this.endpointUrl}/${summaryID}`);
  }
  /**
   * Returns the matching summaries
   *
   * @returns {Observable<SummariesResponse>}
   * @memberof CurrentService
   */
  public list(params: HttpParams = new HttpParams()): Observable<any> {
    const options: any = { params, observe: 'body' };
    return this.http.get<SummariesResponse>(this.endpointUrl, options)
      .catch(err => {
        this.alertService.add({
          type: 'error',
          duration: 10000,
          msg: 'db unreachable'
        });
        return Observable.throw(err);
      });
  }
  /**
   * Submit summary.
   *
   * @param {*} data
   * @returns {Observable<any>}
   * @memberof CurrentService
   */
  public post(data: any): Observable<any> {
    return this.http.post(`${this.endpointUrl}`, data);
  }
}
