import { WeatherState } from "./weather/weather.reducer";

export interface AppState {
  weather: WeatherState;
  temperature: {
    unit: string;
  };
}
