import { Injectable } from '@angular/core';

import { PositionItem, SummaryItem } from '../../api/models';

@Injectable()
export class CurrentStandupService {

  /**
   * current new stand-up positions
   *
   * @private
   * @memberof CurrentStandupService
   */
  private positions: PositionItem[] = [];

  /**
   * current new stand-up summaries
   *
   * @private
   * @memberof CurrentStandupService
   */
  private summaries: SummaryItem[] = [];

  /**
   * current new stand-up date
   *
   * @private
   * @memberof CurrentStandupService
   */
  private date: Date;

  constructor() { }

  /**
   * sets the new stand-up's positions
   *
   * @memberof CurrentService
   */
  public setPositions = function setPositions(positions: PositionItem[]) {
    return this.positions = positions;
  };

  /**
   * sets the new stand-up's summaries
   *
   * @memberof CurrentService
   */
  public setSummaries = function setSummaries(summaries: SummaryItem[]) {
    return this.summaries = summaries;
  };

  /**
   * sets the new stand-up's date
   *
   * @memberof CurrentService
   */
  public setDate = function setDate(date: Date) {
    return this.date = date;
  };

  /**
   * Returns the new stand-up's positions
   *
   * @returns {PositionItem[]}
   * @memberof CurrentService
   */
  public getPositions = function getPositions() {
    return this.positions;
  };

  /**
   * Returns the new stand-up's summaries
   *
   * @returns {SummaryItem[]}
   * @memberof CurrentService
   */
  public getSummaries = function getSummaries() {
    return this.summaries;
  };

  /**
   * Returns the new stand-up's date
   *
   * @returns {date}
   * @memberof CurrentService
   */
  public getDate = function getDate() {
    return this.date;
  };

  /**
   * Clears the data stored in the service
   *
   * @returns {date}
   * @memberof CurrentService
   */
  public clearCurrentStandup = function clearCurrentStandup() {
    this.positions = [];
    this.summaries = [];
    this.date = null;
  };

}
