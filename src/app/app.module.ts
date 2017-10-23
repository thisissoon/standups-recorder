import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { DaysResolver } from './history/history-resolve.service';
import { PositionsResolver, SummariesResolver, StaffMembersResolver } from './standup-detail/standup-detail-resolve.service';

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
    component: TodayComponent
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
      staffMembers: StaffMembersResolver
    }
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
    StaffMembersResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
