import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StaffMembersIndexComponent } from './staff-members-index/staff-members-index.component';
import { StaffMembersNewComponent } from './staff-members-new/staff-members-new.component';
import { StaffMemberDetailComponent } from './staff-member-detail/staff-member-detail.component';
import { StaffMemberEditComponent } from './staff-member-edit/staff-member-edit.component';

import { StaffMembersResolver, StaffMemberResolver } from './staff-members-resolve.service';

const staffMemberRoutes: Routes = [
  {
    path: '',
    component: StaffMembersIndexComponent,
    resolve: {
      staffMembers: StaffMembersResolver
    }
  },
  {
    path: 'new',
    component: StaffMembersNewComponent
  },
  {
    path: ':staffMemberID',
    component: StaffMemberDetailComponent,
    resolve: {
      staffMember: StaffMemberResolver
    }
  },
  {
    path: ':staffMemberID/edit',
    component: StaffMemberEditComponent,
    resolve: {
      staffMember: StaffMemberResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(staffMemberRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StaffMembersRoutingModule { }

export const routedComponents = [StaffMembersIndexComponent, StaffMembersNewComponent, StaffMemberDetailComponent, StaffMemberEditComponent];

export const resolvers = [StaffMembersResolver, StaffMemberResolver];
