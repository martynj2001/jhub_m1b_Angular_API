import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartComponent } from './chart/chart.component';
import { DataSelectStartComponent } from './data-select/data-select-start/data-select-start.component';
import { DataSelectComponent } from './data-select/data-select.component';

const routes: Routes = [
  {path: '', redirectTo: '/datasets', pathMatch: 'full'},
  {path: 'datasets', component: DataSelectComponent, children: [
    {path: '', component: DataSelectStartComponent},
    {path: ':dataSet', component: ChartComponent}
  ]},
  {path: 'chart', component: ChartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
