import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { ServerErrorComponent } from './server-error/server-error.component';

const errorRoutes: Routes = [
  { path: '404', component: NotFoundComponent },
  { path: '500', component: ServerErrorComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class ErrorsRoutingModule { }

export const routedComponents = [NotFoundComponent, ServerErrorComponent];
