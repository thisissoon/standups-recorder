import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer-nav',
  templateUrl: './footer-nav.component.html',
  styleUrls: ['./footer-nav.component.scss']
})
export class FooterNavComponent implements OnInit {

  /**
   * Gradient or no gradient boolean
   *
   * @memberof FooterNavComponent
   */
  @Input() gradient: boolean;

  constructor() { }

  ngOnInit() {
  }

}
