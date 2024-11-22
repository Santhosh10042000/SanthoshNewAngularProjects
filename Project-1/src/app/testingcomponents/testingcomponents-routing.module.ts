import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounteractionComponent } from './counteraction/counteraction.component';

const routes: Routes = [
  {path:'',component:CounteractionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestingcomponentsRoutingModule { }
