import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StandupsIndexComponent } from './standups-index/standups-index.component';
import { StandupDetailComponent } from './standup-detail/standup-detail.component';
import { StandupsNewEditComponent } from './standups-new-edit/standups-new-edit.component';
import { StandupsNewPreviewComponent } from './standups-new-preview/standups-new-preview.component';

import {
  DaysResolver,
  CalendarArrayResolver
} from './standups-index/standups-index-resolve.service';
import {
  PositionsResolver,
  SummariesResolver,
  DayResolver
} from './standup-detail/standup-detail-resolve.service';
import {
  StaffMembersResolver
} from './standups-resolve.service';
import {
  CurrentStandupPositionsResolver,
  CurrentStandupSummariesResolver,
  CurrentStandupDateResolver
} from '../local-store/current-standup-resolve.service';

const standupRoutes: Routes = [
  {
    path: '',
    component: StandupsIndexComponent,
    resolve: {
      days: DaysResolver,
      calendarArray: CalendarArrayResolver
    }
  },
  {
    path: 'new/edit',
    component: StandupsNewEditComponent,
    resolve: {
      staffMembers: StaffMembersResolver,
      positions: CurrentStandupPositionsResolver,
      summaries: CurrentStandupSummariesResolver,
      date: CurrentStandupDateResolver
    }
  },
  {
    path: 'new/preview',
    component: StandupsNewPreviewComponent,
    resolve: {
      staffMembers: StaffMembersResolver,
      positions: CurrentStandupPositionsResolver,
      summaries: CurrentStandupSummariesResolver,
      date: CurrentStandupDateResolver
    }
  },
  {
    path: ':dayID',
    component: StandupDetailComponent,
    resolve: {
      positions: PositionsResolver,
      summaries: SummariesResolver,
      staffMembers: StaffMembersResolver,
      day: DayResolver
    }
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(standupRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class StandupsRoutingModule { }

export const routedComponents = [
  StandupsIndexComponent,
  StandupDetailComponent,
  StandupsNewEditComponent,
  StandupsNewPreviewComponent
];

export const resolvers = [
  DaysResolver,
  CalendarArrayResolver,
  PositionsResolver,
  SummariesResolver,
  DayResolver,
  StaffMembersResolver,
  CurrentStandupPositionsResolver,
  CurrentStandupSummariesResolver,
  CurrentStandupDateResolver
];
