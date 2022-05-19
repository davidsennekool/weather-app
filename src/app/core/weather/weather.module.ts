import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentTemperatureComponent } from './components/current-temperature/current-temperature.component';
import { CurrentStatsComponent } from './components/current-stats/current-stats.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { HourlyWeatherComponent } from './components/hourly-weather/hourly-weather.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment.prod';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { weatherReducer } from '../store/reducers/weather.reducer';
import { EffectsModule } from '@ngrx/effects';
import { WeatherEffects } from '../store';



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
    StoreModule.forRoot({
      weather: weatherReducer,
    }, {}),
    EffectsModule.forRoot([
      WeatherEffects
    ]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
  ],
  exports: [
    CurrentTemperatureComponent,
    CurrentStatsComponent,
    HourlyWeatherComponent,
    ForecastComponent
  ],
})
export class WeatherModule { }
