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
   * Radius of diagrams outer circle
   *
   * @memberof StandupDetailComponent
   */
  public nameCircleRadius: number;

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
    this.outerCircleRadius = this.width * (4 / 12);
    this.nameCircleRadius = this.width * (5 / 12);
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
      const names: any = this.DBStaffMembers.find(DBStaffMember => {
        return DBStaffMember.ID === staffMember.staffID;
      });
      staffMember['coordinate'] = coordinate;
      staffMember['firstName'] = names.firstName;
      staffMember['lastName'] = names.lastName;
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

    const start = d3Svg.append('circle')
      .attr('cx', order[0].coordinate[0])
      .attr('cy', order[0].coordinate[1])
      .attr('opacity', 1)
      .attr('r', 5)
      .attr('fill', 'white');

    formation.forEach((staffMember, index, array) => {
      const coodX = Math.round(this.originX + ((this.nameCircleRadius) * Math.sin(((2 * Math.PI) / array.length) * index)));
      const coodY = Math.round(this.originY - ((this.nameCircleRadius) * Math.cos(((2 * Math.PI) / array.length) * index)));
      const nameOnOuterCircle = d3Svg.append('text')
        .attr('x', coodX)
        .attr('y', coodY)
        .attr('text-anchor', 'middle')
        .classed('standup-diagram__initials', true)
        .text(`${staffMember.firstName.toUpperCase().split('')[0]}${staffMember.lastName.toUpperCase().split('')[0]}`);
    });

  }

}
