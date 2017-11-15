import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ErrorService {
  /**
   * Creates an instance of ErrorService.
   *
   * @param {Router} router
   *
   * @memberof ErrorService
   */
  constructor(private router: Router) { }
  /**
   * Redirects to error pages based on status code
   *
   * @returns {Observable<any>}
   * @memberof ErrorService
   */
  handleError(error: Response | any) {
    if (error.status === 404) {
      this.router.navigate(['404']);
    } else {
      this.router.navigate(['500']);
    }
    return Observable.of(null);
  }
}
