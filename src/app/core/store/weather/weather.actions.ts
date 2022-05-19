import { createAction, props } from "@ngrx/store";
import { CurrentWeather } from "../../interfaces/current-weather";
import { Forecast } from "../../interfaces/forecast";

// Create weather actions
export const loadWeather = createAction(
  '[Weather] Load Weather',
  props<{ location: string }>()
);

export const loadWeatherSuccess = createAction(
  '[Weather] Weather Load Success',
  props<{
    weatherSuccessResponse: {
      currentWeather: CurrentWeather,
      forecast: Forecast
    }
  }>()
);

export const loadWeatherFailure = createAction(
  '[Weather] Weather Load Failure',
  props<{ error: string }>()
);
