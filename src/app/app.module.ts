import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { TodayResolver, TodayPositionsResolver, TodaySummariesResolver } from './today/today-resolve.service';
import { DaysResolver } from './history/history-resolve.service';
import { PositionsResolver, SummariesResolver, DayResolver } from './standup-detail/standup-detail-resolve.service';
import { StaffMembersResolver } from './api/staff-member-resolve.service';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StandupDetailComponent } from './standup-detail/standup-detail.component';
import { StandupDiagramComponent } from './standup-diagram/standup-diagram.component';

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
      days: DaysResolver
    }
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'standups/:dayID',
    component: StandupDetailComponent,
    resolve: {
      positions: PositionsResolver,
      summaries: SummariesResolver,
      staffMembers: StaffMembersResolver,
      day: DayResolver
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
    StandupDiagramComponent
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
    TodaySummariesResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
