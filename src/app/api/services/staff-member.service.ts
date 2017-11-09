import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { StaffMemberItem, StaffMembersResponse } from '../models';

@Injectable()
export class StaffMemberService {
  /**
   * Current end point url
   *
   * @private
   * @memberof CurrentService
   */
  private endpointUrl = `${environment.apiUrl}/staff-members`;
  /**
   * Creates an instance of StaffMemberService.
   * @param {HttpClient} http
   *
   * @memberof StaffMemberService
   */
  constructor(
    private http: HttpClient
  ) { }
  /**
   * Returns the matching position
   *
   * @returns {Observable<StaffMemberItem>}
   * @memberof CurrentService
   */
  public get(staffMemberID): Observable<StaffMemberItem> {
    return this.http.get<StaffMemberItem>(`${this.endpointUrl}/${staffMemberID}`);
  }
  /**
   * Returns the matching staff members
   *
   * @returns {Observable<StaffMembersResponse>}
   * @memberof CurrentService
   */
  public list(params: HttpParams): Observable<any> {
    const options: any = { params, observe: 'body' };
    return this.http.get<StaffMembersResponse[]>(this.endpointUrl, options)
      .catch(err => Observable.throw(err));
  }
  /**
   * update a staff member.
   *
   * @param {string} ID
   * @param {*} data
   * @returns {Observable<any>}
   * @memberof CurrentService
   */
  public update(ID: string, data: any): Observable<any> {
    return this.http.put(`${this.endpointUrl}/${ID}`, data);
  }
  /**
   * create a staff member.
   *
   * @param {*} data
   * @returns {Observable<any>}
   * @memberof CurrentService
   */
  public create(data: any): Observable<any> {
    return this.http.post(`${this.endpointUrl}`, data)
      .catch(err => Observable.throw(err));
  }
}
