import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponentComponent } from './chart-component/chart-component.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { TableModule } from 'primeng/table';

import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';

import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
@NgModule({
  declarations: [
    ChartComponentComponent
  ],
  imports: [
    CommonModule,
    ChartRoutingModule,
    MatExpansionModule,
    TableModule,
    TagModule,
    RatingModule,
    ButtonModule,
    FormsModule,
    MatProgressSpinnerModule
    
  ]
})
export class ChartModule { }
