import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { TodayResolver, TodayPositionsResolver, TodaySummariesResolver } from './today/today-resolve.service';
import { DaysResolver, CalendarArrayResolver } from './history/history-resolve.service';
import { PositionsResolver, SummariesResolver, DayResolver } from './standup-detail/standup-detail-resolve.service';
import { StaffMembersResolver, StaffMemberResolver } from './api/staff-member-resolve.service';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StandupDetailComponent } from './standup-detail/standup-detail.component';
import { StandupDiagramComponent } from './standup-diagram/standup-diagram.component';
import { StaffMemberDetailComponent } from './staff-member-detail/staff-member-detail.component';
import { StandupsNewEditComponent } from './standups-new-edit/standups-new-edit.component';
import { StaffMembersListComponent } from './staff-members-list/staff-members-list.component';

import { ApiModule } from './api/api.module';

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
    path: 'team/:staffMemberID',
    component: StaffMemberDetailComponent,
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
    path: 'standups/new/edit',
    component: StandupsNewEditComponent,
    resolve: {
      staffMembers: StaffMembersResolver
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
    StandupsNewEditComponent,
    StaffMembersListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ApiModule
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
    StaffMemberResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
