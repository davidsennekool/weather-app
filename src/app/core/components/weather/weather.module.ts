import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTemperatureComponent } from './current-temperature/current-temperature.component';
import { CurrentStatsComponent } from './current-stats/current-stats.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HourlyWeatherComponent } from './hourly-weather/hourly-weather.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CurrentTemperatureComponent,
    CurrentStatsComponent,
    HourlyWeatherComponent,
    ForecastComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    CurrentTemperatureComponent,
    CurrentStatsComponent,
    HourlyWeatherComponent,
    ForecastComponent
  ],
})
export class WeatherModule { }
