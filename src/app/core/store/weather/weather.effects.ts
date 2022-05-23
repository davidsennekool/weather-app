import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from "rxjs";
import { ToastService } from "src/app/shared/services/toast.service";

import { WeatherService } from "../../../weather/services/weather.service";
import { loadOneCallForecastFailure, loadOneCallForecastSuccess, loadWeather, loadWeatherFailure, loadWeatherSuccess } from "./weather.actions";

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
        }),
        catchError((error: HttpErrorResponse) => {
          return of(loadWeatherFailure({ error: error.message }))
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
        }),
        catchError((error: HttpErrorResponse) => {
          return of(loadOneCallForecastFailure({ error: error.message }))
        })
      )
    })
  ));

  displayErrorMessage$ = createEffect(() => this.actions$.pipe(
    ofType(loadWeatherFailure, loadOneCallForecastFailure),
    map(({ error }) => {
      this.toastService.show(error, { className: 'bg-danger text-white', delay: 4000 });
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private weatherService: WeatherService,
    private toastService: ToastService
  ) {}
}
