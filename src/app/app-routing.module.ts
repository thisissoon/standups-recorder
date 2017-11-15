import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TodayComponent } from './today/today.component';

import {
  TodayResolver,
  TodayPositionsResolver,
  TodaySummariesResolver
} from './today/today-resolve.service';
import { StaffMembersResolver } from './staff-members/staff-members-resolve.service';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/today',
    pathMatch: 'full'
  },
  {
    path: 'today',
    component: TodayComponent,
    resolve: {
      today: TodayResolver,
      positions: TodayPositionsResolver,
      summaries: TodaySummariesResolver,
      staffMembers: StaffMembersResolver
    }
  },
  {
    path: 'staff-members',
    loadChildren: './staff-members/staff-members.module#StaffMembersModule'
  },
  {
    path: 'standups',
    loadChildren: './standups/standups.module#StandupsModule'
  },
  { path: '**', redirectTo: '404' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }

export const routedComponents = [ TodayComponent ];

export const resolvers = [
  TodayResolver,
  TodayPositionsResolver,
  TodaySummariesResolver,
  StaffMembersResolver
];
