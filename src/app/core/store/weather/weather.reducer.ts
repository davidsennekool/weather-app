import { Action, createReducer, createSelector, on } from "@ngrx/store";
import { CurrentWeather } from "../../interfaces/current-weather";
import { Forecast } from "../../interfaces/forecast";
import { loadWeather, loadWeatherFailure, loadWeatherSuccess } from "./weather.actions";

export interface WeatherState {
  current?: CurrentWeather;
  forecast?: Forecast;
  isLoading: boolean;
  loaded: boolean;
  currentWeatherError?: string;
};

const initialState: WeatherState = {
  isLoading: false,
  loaded: false,
};

export const weatherReducer = createReducer(
  initialState,
  on(loadWeather, (state): WeatherState => ({
    ...state,
    isLoading: true
  })),
  on(loadWeatherSuccess, (state, { weatherSuccessResponse }): WeatherState => {
    return {
      ...state,
      current: weatherSuccessResponse.currentWeather,
      forecast: weatherSuccessResponse.forecast,
      isLoading: false,
      loaded: true,
    };
  }),
  on(loadWeatherFailure, (state, { error }): WeatherState => ({
    ...state,
    isLoading: false,
    loaded: true,
    currentWeatherError: error
  })),
);
