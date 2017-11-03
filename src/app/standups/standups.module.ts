import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { StandupsRoutingModule, routedComponents, resolvers} from './standups-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    StandupsRoutingModule
  ],
  declarations: [
    ...routedComponents
  ],
  providers: [
    ...resolvers
  ]
})
export class StandupsModule { }
