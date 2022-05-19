import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, map, switchMap } from "rxjs";

import { WeatherService } from "../../services/weather.service";
import { loadOneCallForecast, loadOneCallForecastSuccess, loadWeather, loadWeatherFailure, loadWeatherSuccess } from "./weather.actions";

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() =>this.actions$.pipe(
    ofType(loadWeather),
    switchMap((action) => {
      return forkJoin([
        this.weatherService.getCurrentWeather(action),
        // this.weatherService.getForecast(action)
      ]).pipe(
        map(res => {
          return loadWeatherSuccess({
            weatherSuccessResponse: {
              currentWeather: res[0],
              // forecast: res[1]
            }
          })
        })
      );
    }),
    // map((res) => loadOneCallForecast({ lat: res.weatherSuccessResponse.currentWeather.coord.lat, lon: res.weatherSuccessResponse.currentWeather.coord.lon }))
  ));

  loadForecast$ = createEffect(() => this.actions$.pipe(
    ofType(loadWeatherSuccess),
    switchMap((action) => {
      return this.weatherService.getForecastOneCall(action.weatherSuccessResponse.currentWeather.coord).pipe(
        map(forecast => {
          return loadOneCallForecastSuccess({
            weatherSuccessResponse: {
              forecast
            }
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
