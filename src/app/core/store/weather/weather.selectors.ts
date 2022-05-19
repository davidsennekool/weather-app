import { createSelector } from "@ngrx/store";

import { AppState } from "../app.state";
import { WeatherState } from "./weather.reducer";

export const selectWeather = (state: AppState) => state.weather;

export const selectLoaded = (state: WeatherState) => state.loaded;
export const selectIsLoading = createSelector(
  selectWeather,
  (state: WeatherState) => state.isLoading
);

export const selectCurrentTemperature = createSelector(
  selectWeather,
  (state: WeatherState) => state.current?.main.temp
);

export const selectCurrentWeather = createSelector(
  selectWeather,
  (state: WeatherState) => state.current
);

export const selectForecast = createSelector(
  selectWeather,
  (state: WeatherState) => state.forecast
);