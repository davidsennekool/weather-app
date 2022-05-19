import { createAction, props } from "@ngrx/store";
import { CurrentWeather } from "../../interfaces/current-weather";

// Create weather actions
export const fetchCurrentWeather = createAction(
  '[Weather] Fetch Current Weather',
  props<{ location: string }>()
);

export const fetchCurrentWeatherSuccess = createAction(
  '[Weather] Fetch Current Weather Success',
  props<{ fetchWeatherSuccessResponse: CurrentWeather }>()
  // props<{ fetchWeatherSuccessResponse: CurrentWeatherResponse }>()
);

export const fetchCurrentWeatherFail = createAction(
  '[Weather] Fetch Current Weather Fail',
  props<{ error: string }>()
);
