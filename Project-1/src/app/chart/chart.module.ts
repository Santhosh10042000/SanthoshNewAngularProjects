import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponentComponent } from './chart-component/chart-component.component';


@NgModule({
  declarations: [
    ChartComponentComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule
  ]
})
export class ChartModule { }
