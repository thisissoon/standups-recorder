import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionService, SummaryService, StaffMemberService, DayService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PositionService, SummaryService, StaffMemberService, DayService]
})
export class ApiModule { }
