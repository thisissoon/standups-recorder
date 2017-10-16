import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';

import { PositionItem } from './models';

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
  public get(): Observable<PositionItem> {
    return this.http.get<PositionItem>(this.endpointUrl);
  }
}
