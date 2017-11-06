import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';

import { StaffMemberItem, StaffMembersResponse } from '../models';

import { AlertService } from '../../shared/alerts/alert.service';

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
    private http: HttpClient,
    private alertService: AlertService
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
      .catch(err => {
        this.alertService.add({
          type: 'error',
          duration: 5000,
          msg: 'staff member not saved'
        });
        return Observable.throw(err);
      });
  }
}
