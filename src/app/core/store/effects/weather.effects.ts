import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from "rxjs";

import { CurrentWeather } from "../../interfaces/current-weather";
import { WeatherService } from "../../services/weather.service";
import { fetchCurrentWeather, fetchCurrentWeatherFail, fetchCurrentWeatherSuccess } from "../actions/weather.actions";

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() =>this.actions$.pipe(
    ofType(fetchCurrentWeather),
    switchMap((action) => {
      return this.weatherService.getCurrentWeather(action.location).pipe(
        map((data: CurrentWeather) => {
          console.log(data);
          return fetchCurrentWeatherSuccess({ fetchWeatherSuccessResponse: data });
        })
      )
      // catchError(() => {
      //   return of(fetchCurrentWeatherFail())
      // });
    }))
  );

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
  ) {}
}
