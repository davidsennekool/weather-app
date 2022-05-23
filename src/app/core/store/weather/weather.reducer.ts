import { Action, createReducer, createSelector, on } from "@ngrx/store";
import { CurrentWeather } from "../../interfaces/current-weather";
import { Forecast } from "../../interfaces/forecast";
import { loadOneCallForecast, loadOneCallForecastFailure, loadOneCallForecastSuccess, loadWeather, loadWeatherFailure, loadWeatherSuccess } from "./weather.actions";

export interface WeatherState {
  current?: CurrentWeather;
  forecast?: Forecast;
  location: string;
  isLoading: boolean;
  loaded: boolean;
  errorMessage?: string;
};

const initialState: WeatherState = {
  location: 'Groningen',
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
      location: weatherSuccessResponse.location,
      isLoading: false,
      loaded: true,
    };
  }),
  on(loadWeatherFailure, (state, { error }): WeatherState => ({
    ...state,
    isLoading: false,
    loaded: true,
    errorMessage: error
  })),
  on(loadOneCallForecast, (state): WeatherState => ({
    ...state,
    isLoading: true
  })),
  on(loadOneCallForecastSuccess, (state, { weatherSuccessResponse }): WeatherState => ({
    ...state,
    forecast: weatherSuccessResponse.forecast,
    isLoading: false,
    loaded: true
  })),
  on(loadOneCallForecastFailure, (state, { error }): WeatherState => ({
    ...state,
    isLoading: false,
    loaded: true,
    errorMessage: error
  }))
);
