import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from "rxjs";

import { WeatherService } from "../../../weather/services/weather.service";
import { loadOneCallForecastSuccess, loadWeather, loadWeatherSuccess } from "./weather.actions";

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() =>this.actions$.pipe(
    ofType(loadWeather),
    switchMap((action) => {
      return this.weatherService.getCurrentWeather(action).pipe(
        map(currentWeather => {
          return loadWeatherSuccess({
            weatherSuccessResponse: {
              currentWeather,
              location: action.location
            }
          })
        })
      );
    })
  ));

  loadForecast$ = createEffect(() => this.actions$.pipe(
    ofType(loadWeatherSuccess),
    switchMap((action) => {
      return this.weatherService.getForecastOneCall(action.weatherSuccessResponse.currentWeather.coord).pipe(
        map(forecast => {
          return loadOneCallForecastSuccess({
            weatherSuccessResponse: {
              forecast
            },
          })
        })
      )
    })
  ))

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
  ) {}
}
