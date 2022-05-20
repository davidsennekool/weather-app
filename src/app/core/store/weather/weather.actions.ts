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
      location: string;
    }
  }>()
);

export const loadWeatherFailure = createAction(
  '[Weather] Weather Load Failure',
  props<{ error: string }>()
);

export const loadOneCallForecast = createAction(
  '[Weather] Load One Call Forecast',
  props<{ lat: number; lon: number }>()
);

export const loadOneCallForecastSuccess = createAction(
  '[Weather] Weather One Call Forecast Success',
  props<{
    weatherSuccessResponse: {
      forecast: Forecast
    }
  }>()
);
