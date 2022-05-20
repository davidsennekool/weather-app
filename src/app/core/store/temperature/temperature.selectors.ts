import { AppState } from "../app.state";

export const selectTemperatureUnit = (state: AppState) => state.temperature.unit;
