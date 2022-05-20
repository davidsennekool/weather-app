import { WeatherState } from "./weather/weather.reducer";

export interface AppState {
  weather: WeatherState;
  temperature: {
    temperatureUnit: string;
  };
}
