import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TodayComponent } from './today/today.component';
import { HistoryComponent } from './history/history.component';
import { TeamComponent } from './team/team.component';
import { FooterNavComponent } from './footer-nav/footer-nav.component';

const appRoutes: Routes = [
  { path: 'today', component: TodayComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'team', component: TeamComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    TodayComponent,
    HistoryComponent,
    TeamComponent,
    FooterNavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
