import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewStandupService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [ NewStandupService ]
})
export class LocalStoreModule { }
