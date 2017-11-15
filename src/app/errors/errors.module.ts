import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorService } from './error.service';
import { ErrorsRoutingModule, routedComponents } from './errors-routing.module';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule,
    SharedModule
  ],
  declarations: [
    ...routedComponents,
  ]
})
export class ErrorsModule { 
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ErrorsModule,
      providers: [ErrorService]
    };
  }
}