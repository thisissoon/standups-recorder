import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';

import * as d3 from 'd3';

import { PositionItem, SummaryItem, StaffMemberItem } from '../api/models';

@Component({
  selector: 'app-standup-diagram',
  templateUrl: './standup-diagram.component.html',
  styleUrls: ['./standup-diagram.component.scss']
})
export class StandupDiagramComponent implements OnInit {

  /**
   * Width of svg to be drawn
   *
   * @memberof StandupDiagramComponent
   */
  @Input() width: number;

  /**
   * List of positions filtered on dayID from the backend
   *
   * @memberof StandupDetailComponent
   */
  @Input() DBPositions: PositionItem[];

  /**
   * List of summaries filtered on dayID from the backend
   *
   * @memberof StandupDetailComponent
   */
  @Input() DBSummaries: SummaryItem[];

  /**
   * List of staff members from the backend
   *
   * @memberof StandupDetailComponent
   */
  @Input() DBStaffMembers: StaffMemberItem[];

  /**
   * Coordinates of the middle of the SVG
   *
   * @memberof StandupDetailComponent
   */
  public originX: number;

  /**
   * Coordinates of the middle of the SVG
   *
   * @memberof StandupDetailComponent
   */
  public originY: number;

  /**
   * Radius of diagrams outer circle
   *
   * @memberof StandupDetailComponent
   */
  public outerCircleRadius: number;

  /**
   * angular svg element
   *
   * @memberof StandupDetailComponent
   */
  @ViewChild('svg')
  private svg: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.originX = this.width / 2;
    this.originY = this.width / 2;
    this.outerCircleRadius = this.width * (2 / 4);
    this.renderDiagram();
  }

  /**
   * Render stand-up dagram as SVG to DOM.
   *
   * @param {DBPositions} DBPositions
   * @param {DBSummaries} DBSummaries
   * @memberof HistoryComponent
   *
   * @method renderDiagram
   */
  public renderDiagram(): void {

    const formation = this.DBPositions.map((staffMember, index, array) => {
      const coodX = Math.round(this.originX + ((this.outerCircleRadius) * Math.sin(((2 * Math.PI) / array.length) * index)));
      const coodY = Math.round(this.originY - ((this.outerCircleRadius) * Math.cos(((2 * Math.PI) / array.length) * index)));
      const coordinate = [coodX, coodY];
      staffMember['coordinate'] = coordinate;
      return staffMember;
    });

    const order = this.DBSummaries.map((staffMember, index, array) => {
      const coordinate = formation.find(staff => {
        return staff.staffID === staffMember.staffID;
      })['coordinate'];
      staffMember['coordinate'] = coordinate;
      return staffMember;
    });

    const lineGenerator = d3.line()
      .x(summary => summary.coordinate[0])
      .y(summary => summary.coordinate[1]);

    const pathData = lineGenerator(order);

    const d3Svg = d3.select(this.svg.nativeElement)
      .attr('version', 1.1)
      .attr('xmlns', 'http://www.w3.org/2000/svg')
      .style('height', this.width)
      .style('width', this.width)
      .classed('standup-diagram__path', true);

    const line = d3Svg.append('path')
      .attr('d', pathData)
      .classed('standup-diagram__path', true);

  }

}
