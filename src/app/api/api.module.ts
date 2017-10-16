import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionService, SummaryService, StaffMemberService } from './services';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PositionService, SummaryService, StaffMemberService]
})
export class ApiModule { }
