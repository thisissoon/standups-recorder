import { Component, OnInit, Input, ElementRef, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

import * as d3 from 'd3';

import { PositionItem, SummaryItem, StaffMemberItem } from '../api/models';

@Component({
  selector: 'app-standup-diagram',
  templateUrl: './standup-diagram.component.html',
  styleUrls: ['./standup-diagram.component.scss']
})
export class StandupDiagramComponent implements OnInit, OnChanges {

  /**
   * Width of svg to be drawn
   *
   * @memberof StandupDiagramComponent
   */
  @Input() width: number;

  /**
   * List of positions
   *
   * @memberof StandupDetailComponent
   */
  @Input() positions: PositionItem[];

  /**
   * List of summaries
   *
   * @memberof StandupDetailComponent
   */
  @Input() summaries: SummaryItem[];

  /**
   * List of staff members from the backend
   *
   * @memberof StandupDetailComponent
   */
  @Input() staffMembers: StaffMemberItem[];

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

  /**
   * Render stand-up dagram as SVG to DOM.
   *
   * @param {positions} positions
   * @param {summaries} summaries
   * @memberof StandupDiagramComponent
   *
   * @method renderDiagram
   */
  public renderDiagram(): void {

    this.positions = this.positions.map((position, index, array) => {
      const coodX = Math.round(this.originX + ((this.outerCircleRadius) * Math.sin(((2 * Math.PI) / array.length) * index)));
      const coodY = Math.round(this.originY - ((this.outerCircleRadius) * Math.cos(((2 * Math.PI) / array.length) * index)));
      const coordinates = [coodX, coodY];
      const names: any = this.staffMembers.find(DBStaffMember => {
        return DBStaffMember.ID === position.staffID;
      });
      position.coordinates = coordinates;
      position.initials = `${names.firstName.split('')[0]}${names.lastName.split('')[0]}`;
      return position;
    });

    this.summaries = this.summaries.map((summary, index, array) => {
      const coordinates = this.positions.find(staff => {
        return staff.staffID === summary.staffID;
      }).coordinates;
      summary.coordinates = coordinates;
      return summary;
    });

    const lineGenerator = d3.line()
      .x(summary => summary.coordinates[0])
      .y(summary => summary.coordinates[1]);

    const pathData = lineGenerator(this.summaries);

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
      .attr('cx', this.summaries[0].coordinates[0])
      .attr('cy', this.summaries[0].coordinates[1])
      .attr('opacity', 1)
      .attr('r', 5)
      .attr('fill', 'white');

    this.positions.forEach((position, index, array) => {
      const coodX = Math.round(this.originX + ((this.nameCircleRadius) * Math.sin(((2 * Math.PI) / array.length) * index)));
      const coodY = Math.round(this.originY - ((this.nameCircleRadius) * Math.cos(((2 * Math.PI) / array.length) * index)));
      const nameOnOuterCircle = d3Svg.append('text')
        .attr('x', coodX)
        .attr('y', coodY)
        .attr('text-anchor', 'middle')
        .classed('standup-diagram__initials', true)
        .text(position.initials.toUpperCase());
    });

  }

  constructor() {
  }

  /**
   * Set variables required for digram from those provided to
   * the component
   *
   * @memberof StandupDiagramComponent
   *
   * @method ngOnInit
   */
  ngOnInit() {
    this.originX = this.width / 2;
    this.originY = this.width / 2;
    this.outerCircleRadius = this.width * (4 / 12);
    this.nameCircleRadius = this.width * (5 / 12);
    this.renderDiagram();
  }

  /**
   * On change of input variable, if change
   * is from positions and is not the first change
   * then clear svg and re-render.
   *
   * @memberof StandupDiagramComponent
   *
   * @method ngOnChanges
   */
  ngOnChanges(changes: SimpleChanges) {
    if (!changes.positions.firstChange) {
      const d3Svg = d3.select(this.svg.nativeElement).selectAll('*').remove();
      this.renderDiagram();
    }
  }

}
