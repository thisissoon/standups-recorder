import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routedComponents, resolvers } from './app-routing.module';

import { AppComponent } from './app.component';

import { ApiModule } from './api/api.module';
import { LocalStoreModule } from './local-store/local-store.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    ...routedComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApiModule,
    LocalStoreModule,
    AppRoutingModule,
    SharedModule.forRoot(),
  ],
  providers: [...resolvers],
  bootstrap: [AppComponent]
})
export class AppModule { }
