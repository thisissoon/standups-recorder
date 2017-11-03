import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StaffMemberDetailsFormComponent } from './staff-member-details-form/staff-member-details-form.component';

import { StaffMembersRoutingModule, routedComponents, resolvers } from './staff-members-routing.module';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StaffMembersRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [
    StaffMemberDetailsFormComponent,
    ...routedComponents,
  ],
  providers: [
    ...resolvers
  ]
})
export class StaffMembersModule { }
