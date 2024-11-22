import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestingcomponentsRoutingModule } from './testingcomponents-routing.module';
import { CounteractionComponent } from './counteraction/counteraction.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';


@NgModule({
  declarations: [
    CounteractionComponent,
    CounterDisplayComponent
  ],
  imports: [
    CommonModule,
    TestingcomponentsRoutingModule
  ]
})
export class TestingcomponentsModule { }
