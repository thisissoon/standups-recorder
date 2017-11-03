import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { StaffMembersListComponent } from './staff-members-list/staff-members-list.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StandupDiagramComponent } from './standup-diagram/standup-diagram.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    StaffMembersListComponent,
    FooterNavComponent,
    StandupDiagramComponent
  ],
  declarations: [
    StaffMembersListComponent,
    FooterNavComponent,
    StandupDiagramComponent
  ]
})
export class SharedModule { }
