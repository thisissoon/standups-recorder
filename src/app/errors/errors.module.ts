import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorService } from './error.service';
import { ErrorsRoutingModule, routedComponents } from './errors-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ErrorsRoutingModule
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