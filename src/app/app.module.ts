
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import {  ParticlesModule } from 'angular-particle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SdLineMap } from './comments/components/sdLineMap/echartsindex.component';
import { SdMap } from './comments/components/sdMap/sandian.component';
import { NewEChartsComponent1 } from './comments/new-echarts/new-echarts.component';
import { MoveLineMap } from './comments/components/moveLineMap/new-echarts.component';
import { NewEchart3Component } from './comments/new-echart3/new-echart3.component';
import { XyEchart } from './comments/components/xyEchart/xyEchart.component';
import { BarEchart } from './comments/components/barEchart/barEchart.component';

import { NewEchart4Component } from './comments/new-echart4/new-echart4.component';
import { NewEchart5Component } from './comments/new-echart5/new-echart5.component';
import { XyLineComponent } from './comments/new-echart5/xyLine/xy-line.component';
import { PieEchart } from './comments/components/pieEchart/pieEchart.component';


@NgModule({
  declarations: [
    AppComponent,
    SdLineMap,
    SdMap,
    NewEChartsComponent1, MoveLineMap, NewEchart3Component, XyEchart,BarEchart, NewEchart4Component, NewEchart5Component, XyLineComponent, PieEchart,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxEchartsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    ParticlesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
