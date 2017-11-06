import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionService, SummaryService, StaffMemberService, DayService, StandupService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PositionService, SummaryService, StaffMemberService, DayService, StandupService]
})
export class ApiModule { }
