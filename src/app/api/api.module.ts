import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionService, SummaryService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PositionService, SummaryService]
})
export class ApiModule { }
