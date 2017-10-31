import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodayResolver, TodayPositionsResolver, TodaySummariesResolver } from './today/today-resolve.service';
import { DaysResolver, CalendarArrayResolver } from './history/history-resolve.service';
import { PositionsResolver, SummariesResolver, DayResolver } from './standup-detail/standup-detail-resolve.service';
import { StaffMembersResolver, StaffMemberResolver } from './api/staff-member-resolve.service';
import {
  CurrentStandupPositionsResolver,
  CurrentStandupSummariesResolver,
  CurrentStandupDateResolver
} from './local-store/current-standup-resolve.service';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StandupDetailComponent } from './standup-detail/standup-detail.component';
import { StandupDiagramComponent } from './standup-diagram/standup-diagram.component';
import { StaffMemberDetailComponent } from './staff-member-detail/staff-member-detail.component';
import { StandupsCurrentEditComponent } from './standups-current-edit/standups-current-edit.component';
import { StandupsNewEditComponent } from './standups-new-edit/standups-new-edit.component';
import { StaffMembersListComponent } from './staff-members-list/staff-members-list.component';
import { StandupsCurrentPreviewComponent } from './standups-current-preview/standups-current-preview.component';
import { StandupsNewPreviewComponent } from './standups-new-preview/standups-new-preview.component';
import { StaffMemberEditComponent } from './staff-member-edit/staff-member-edit.component';
import { StaffMemberDetailsFormComponent } from './staff-member-details-form/staff-member-details-form.component';
import { StaffMemberNewComponent } from './staff-member-new/staff-member-new.component';

import { ApiModule } from './api/api.module';
import { LocalStoreModule } from './local-store/local-store.module';

const appRoutes: Routes = [
  {
    path: 'today',
    component: TodayComponent,
    resolve: {
      today: TodayResolver,
      positions: TodayPositionsResolver,
      summaries: TodaySummariesResolver,
      staffMembers: StaffMembersResolver,
    }
  },
  {
    path: 'standups/new/edit',
    component: StandupsNewEditComponent,
    resolve: {
      staffMembers: StaffMembersResolver,
      positions: CurrentStandupPositionsResolver,
      summaries: CurrentStandupSummariesResolver,
      date: CurrentStandupDateResolver
    }
  },
  {
    path: 'standups/new/preview',
    component: StandupsNewPreviewComponent,
    resolve: {
      staffMembers: StaffMembersResolver,
      positions: CurrentStandupPositionsResolver,
      summaries: CurrentStandupSummariesResolver,
      date: CurrentStandupDateResolver
    }
  },
  {
    path: 'history',
    component: HistoryComponent,
    resolve: {
      days: DaysResolver,
      calendarArray: CalendarArrayResolver
    }
  },
  {
    path: 'team',
    component: TeamComponent,
    resolve: {
      staffMembers: StaffMembersResolver
    }
  },
  {
    path: 'team/new',
    component: StaffMemberNewComponent
  },
  {
    path: 'team/:staffMemberID',
    component: StaffMemberDetailComponent,
    resolve: {
      staffMember: StaffMemberResolver
    }
  },
  {
    path: 'team/:staffMemberID/edit',
    component: StaffMemberEditComponent,
    resolve: {
      staffMember: StaffMemberResolver
    }
  },
  {
    path: 'history/:dayID',
    component: StandupDetailComponent,
    resolve: {
      positions: PositionsResolver,
      summaries: SummariesResolver,
      staffMembers: StaffMembersResolver,
      day: DayResolver
    }
  },
  {
    path: 'history/:dayID/edit',
    component: StandupsCurrentEditComponent,
    resolve: {
      staffMembers: StaffMembersResolver,
      positions: CurrentStandupPositionsResolver,
      summaries: CurrentStandupSummariesResolver,
      date: CurrentStandupDateResolver
    }
  },
  {
    path: 'history/:dayID/preview',
    component: StandupsCurrentPreviewComponent,
    resolve: {
      staffMembers: StaffMembersResolver,
      positions: CurrentStandupPositionsResolver,
      summaries: CurrentStandupSummariesResolver,
      date: CurrentStandupDateResolver
    }
  },
  {
    path: '**',
    redirectTo: 'today',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    HistoryComponent,
    TeamComponent,
    FooterNavComponent,
    StandupDetailComponent,
    StandupDiagramComponent,
    StaffMemberDetailComponent,
    StandupsCurrentEditComponent,
    StandupsNewEditComponent,
    StaffMembersListComponent,
    StandupsCurrentPreviewComponent,
    StandupsNewPreviewComponent,
    StaffMemberEditComponent,
    StaffMemberDetailsFormComponent,
    StaffMemberNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ApiModule,
    LocalStoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DaysResolver,
    PositionsResolver,
    SummariesResolver,
    StaffMembersResolver,
    DayResolver,
    TodayResolver,
    TodayPositionsResolver,
    TodaySummariesResolver,
    CalendarArrayResolver,
    StaffMemberResolver,
    CurrentStandupPositionsResolver,
    CurrentStandupSummariesResolver,
    CurrentStandupDateResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
