import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { forkJoin, map, switchMap } from "rxjs";

import { WeatherService } from "../../services/weather.service";
import { loadWeather, loadWeatherFailure, loadWeatherSuccess } from "./weather.actions";

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() =>this.actions$.pipe(
    ofType(loadWeather),
    switchMap((action) => {
      return forkJoin([
        this.weatherService.getCurrentWeather(action),
        this.weatherService.getForecast(action)
      ]).pipe(
        map(res => {
          return loadWeatherSuccess({
            weatherSuccessResponse: {
              currentWeather: res[0],
              forecast: res[1]
            }
          })
        })
      );
    })
  ));

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
  ) {}
}
