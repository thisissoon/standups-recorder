import { Injectable } from '@angular/core';
import { Router, NavigationEnd, NavigationError } from '@angular/router';
import { Alert } from './alert.model';

/**
 * Used to add site alerts to be displayed
 *
 * @example
 * ```
 * let alert: Alert = {
 *   type: 'success',
 *   msg: 'Well done, you did a thing!',
 *   duration: 5000
 * };
 * service.add(alert);
 * ```
 *
 * @export
 * @class AlertService
 */
@Injectable()
export class AlertService {
  /**
   * Default animation duration
   *
   * @static
   * @type {number}
   * @default 500
   * @memberOf AlertService
   */
  public ANIMATION_DURATION = 500;
  /**
   * List of alerts to display
   *
   * @type {Array<Alert>}
   * @memberOf AlertService
   */
  public alerts: Array<Alert> = [];
  /**
   * Add a new alert to list of alerts
   *
   * @param {Alert} alert
   *
   * @memberOf AlertService
   */
  public add(alert: Alert) {
    this.alerts.push(alert);
    this.setAlertToClose(alert);
  }
  /**
   * Set a timeout to close an alert
   *
   * @param {Alert} alert
   *
   * @memberOf AlertService
   */
  public setAlertToClose(alert: Alert) {
    const duration = (alert.duration - this.ANIMATION_DURATION),
      close = () => this.alerts = [];
    setTimeout(close, duration);
  }

}
