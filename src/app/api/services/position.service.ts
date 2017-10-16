import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { PositionItem, PositionsResponse } from '../models';

@Injectable()
export class PositionService {
  /**
   * Current end point url
   *
   * @private
   * @memberof CurrentService
   */
  private endpointUrl = `${environment.apiUrl}/positions`;
  /**
   * Creates an instance of PositionService.
   * @param {HttpClient} http
   *
   * @memberof PositionService
   */
  constructor(private http: HttpClient) { }
  /**
   * Returns the matching position
   *
   * @returns {Observable<PositionItem>}
   * @memberof CurrentService
   */
  public get(positionID): Observable<PositionItem> {
    return this.http.get<PositionItem>(`${this.endpointUrl}/${positionID}`);
  }
  /**
   * Returns the matching positions
   *
   * @returns {Observable<PositionsResponse>}
   * @memberof CurrentService
   */
  public list(params: HttpParams = new HttpParams()): Observable<any> {
    const options: any = { params, observe: 'body' };
    return this.http.get<PositionsResponse[]>(this.endpointUrl, options);
  }
}
