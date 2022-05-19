import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTemperatureComponent } from './components/current-temperature/current-temperature.component';
import { CurrentStatsComponent } from './components/current-stats/current-stats.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
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
