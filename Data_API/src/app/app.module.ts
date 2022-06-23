import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './chart/filter/filter.component';
import { DataSelectComponent } from './data-select/data-select.component';
import { ChartComponent } from './chart/chart.component';
import { DataSelectStartComponent } from './data-select/data-select-start/data-select-start.component';
import { DataRawComponent } from './chart/data-raw/data-raw.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DataSelectItemComponent } from './data-select/data-select-item/data-select-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FilterComponent,
    DataSelectComponent,
    ChartComponent,
    DataSelectStartComponent,
    DataRawComponent,
    DataSelectItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
