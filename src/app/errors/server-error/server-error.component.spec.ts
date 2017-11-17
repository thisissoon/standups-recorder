import { Component } from '@angular/core'
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerErrorComponent } from './server-error.component';

@Component({ selector: 'app-footer-nav', template: '' })
class FooterNavStubComponent { }

describe('ServerErrorComponent', () => {
  let component: ServerErrorComponent;
  let fixture: ComponentFixture<ServerErrorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ServerErrorComponent,
        FooterNavStubComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServerErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
