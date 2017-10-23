import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { DaysResolveService, providers } from './history/history-resolve.service';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';
import { StandupDetailComponent } from './standup-detail/standup-detail.component';

import { ApiModule } from './api/api.module';

const appRoutes: Routes = [
  {
    path: 'today',
    component: TodayComponent
  },
  { path: 'history',
    component: HistoryComponent,
    resolve: {
      days: DaysResolveService
    }
  },
  { path: 'team',
    component: TeamComponent
  },
  { path: 'standups/:id',
    component: StandupDetailComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    HistoryComponent,
    TeamComponent,
    FooterNavComponent,
    StandupDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    ApiModule
  ],
  providers: [
    ...providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
