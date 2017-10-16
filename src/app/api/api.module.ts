import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PositionService } from './position.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [PositionService]
})
export class ApiModule { }
