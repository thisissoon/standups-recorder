import { Component, Directive, Input } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { CurrentStandupService } from '../../local-store/services';

import { StandupsIndexComponent } from './standups-index.component';

@Directive({
  selector: '[routerLink]'
})
export class RouterLinkStubDirective {
  @Input('routerLink') linkParams: any;
}

@Component({ selector: 'app-footer-nav', template: '' })
class FooterNavStubComponent {
  @Input() gradient;
}

describe('StandupsIndexComponent', () => {
  let component: StandupsIndexComponent;
  let fixture: ComponentFixture<StandupsIndexComponent>;

  beforeEach(async(() => {

    const resolveData = {
      days: {
        _embedded: {
          days: []
        }
      },
      calendarArray: []
    };

    const mockActivatedRoute = { data: Observable.of(resolveData) };

    TestBed.configureTestingModule({
      declarations: [ 
        StandupsIndexComponent,
        RouterLinkStubDirective,
        FooterNavStubComponent
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        CurrentStandupService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandupsIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
