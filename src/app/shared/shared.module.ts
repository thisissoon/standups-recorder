import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StaffMembersListComponent } from './staff-members-list/staff-members-list.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StandupDiagramComponent } from './standup-diagram/standup-diagram.component';
import { AlertsComponent } from './alerts/alerts.component';
import { AlertService } from './alerts/alert.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StaffMembersListComponent,
    FooterNavComponent,
    StandupDiagramComponent,
    AlertsComponent
  ],
  declarations: [
    StaffMembersListComponent,
    FooterNavComponent,
    StandupDiagramComponent,
    AlertsComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [AlertService]
    };
  }
}
