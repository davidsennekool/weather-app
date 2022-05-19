import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { WeatherModule } from './weather/weather.module';
import { WeatherService } from './services/weather.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    WeatherModule,
  ],
  providers: [
    WeatherService,
  ],
  exports: [
    WeatherModule,
  ]
})
export class CoreModule { }
