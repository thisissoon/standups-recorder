import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentStandupService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ CurrentStandupService ]
})
export class LocalStoreModule { }
