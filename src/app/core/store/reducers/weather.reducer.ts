import { Action, createReducer, on } from "@ngrx/store";
import { fetchCurrentWeather, fetchCurrentWeatherFail, fetchCurrentWeatherSuccess } from "../actions/weather.actions";

export interface WeatherState {
  data: Object;
  location: string | null;
  isLoading: boolean;
  loaded: boolean;
  currentWeatherError?: string;
};

const initialState: WeatherState = {
  data: {},
  location: null,
  isLoading: false,
  loaded: false,
};

const _weatherReducer = createReducer(
  initialState,
  on(fetchCurrentWeather, (state): WeatherState => ({
    ...state,
    isLoading: true
  })),
  on(fetchCurrentWeatherSuccess, (state, { fetchWeatherSuccessResponse }): WeatherState => {
    return {
      ...state,
      data: fetchWeatherSuccessResponse,
      location: fetchWeatherSuccessResponse.location!,
      isLoading: false,
      loaded: true,
    };
  }),
  on(fetchCurrentWeatherFail, (state, { error }): WeatherState => ({
    ...state,
    data: {},
    location: null,
    isLoading: false,
    loaded: true,
    currentWeatherError: error
  })),
);

export function weatherReducer(state: any, action: Action) {
  return _weatherReducer(state, action);
}
