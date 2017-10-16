import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { SummaryItem, SummariesResponse } from '../models';

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
  constructor(private http: HttpClient) { }
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
    return this.http.get<SummariesResponse>(this.endpointUrl, options);
  }
}
