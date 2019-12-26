
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SdLineMap } from './comments/components/sdLineMap/echartsindex.component';
import { SdMap } from './comments/components/sdMap/sandian.component';
import { NewEChartsComponent1 } from './comments/new-echarts/new-echarts.component';
import { MoveLineMap } from './comments/components/moveLineMap/new-echarts.component';
import { NewEchart3Component } from './comments/new-echart3/new-echart3.component';
import { NewEchart4Component } from './comments/new-echart4/new-echart4.component';
import { NewEchart5Component } from './comments/new-echart5/new-echart5.component';

const routes: Routes = [
  {
    path: "sdlineMap",
    component: SdLineMap
  },
  {
    path: "sandian",
    component: SdMap
  },
  {
    path: 'NewEChartsComponent',
    component: NewEChartsComponent1
  },
  {
    path: 'moveLineMap',
    component: MoveLineMap
  },
  {
    path: 'BiData1',
    component: NewEchart3Component
  },
  {
    path: 'BiData2',
    component: NewEchart4Component
  },
  {
    path: 'BiData3',
    component: NewEchart5Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
