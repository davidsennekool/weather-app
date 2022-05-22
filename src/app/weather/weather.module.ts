import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTemperatureComponent } from './components/current-temperature/current-temperature.component';
import { CurrentStatsComponent } from './components/current-stats/current-stats.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ForecastTableColumnComponent } from './components/forecast-table-column/forecast-table-column.component';


@NgModule({
  declarations: [
    CurrentTemperatureComponent,
    CurrentStatsComponent,
    HourlyWeatherComponent,
    ForecastComponent,
    ForecastTableColumnComponent
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
