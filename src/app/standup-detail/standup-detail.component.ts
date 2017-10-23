import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { PositionsResponse, PositionItem, SummariesResponse, SummaryItem } from '../api/models';

@Component({
  selector: 'app-standup-detail',
  templateUrl: './standup-detail.component.html',
  styleUrls: ['./standup-detail.component.scss']
})
export class StandupDetailComponent implements OnInit {

  /**
   * URL param map
   *
   * @memberof StandupDetailComponent
   */
  public params: {
    dayID: string;
  };

  /**
   * List of positions filtered on dayID from the backend
   *
   * @memberof StandupDetailComponent
   */
    public DBPositions: PositionItem[];

  /**
   * List of summaries filtered on dayID from the backend
   *
   * @memberof StandupDetailComponent
   */
    public DBSummaries: SummaryItem[];

  /**
   * Creates an instance of StandupDetailComponent.
   * @param {ActivatedRoute} route
   *
   * @memberof StandupDetailComponent
   */
  constructor(
    protected route: ActivatedRoute
  ) {
    route.paramMap.subscribe((value: any) => this.params = value.params);
  }

  ngOnInit() {
    this.route.data.forEach((data: { positions: PositionsResponse, summaries: SummariesResponse }) => {
      this.DBPositions = data.positions._embedded.positions;
      this.DBSummaries = data.summaries._embedded.summaries;
    });
  }

}
