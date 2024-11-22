import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'chart',
    loadChildren: () => import('./chart/chart.module').then(m => m.ChartModule)
  },
  {
    path: '',
    loadChildren: () => import('./testingcomponents/testingcomponents.module').then(m => m.TestingcomponentsModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
