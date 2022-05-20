import { createReducer, on } from "@ngrx/store";
import { loadTemperatureUnit, loadTemperatureUnitSuccess } from "./temperature.actions";

interface InitialState {
  temperatureUnit: string
  isLoading: boolean;
  loaded: boolean;
};

const initialState: InitialState = {
  temperatureUnit: 'C',
  isLoading: false,
  loaded: false,
};

export const temperatureUnitReducer = createReducer(
  initialState,
  on(loadTemperatureUnit, (state) => ({
    ...state,
    isLoading: true,
    temperatureUnit: state.temperatureUnit,
  })),
  on(loadTemperatureUnitSuccess, (state, { temperatureUnit }) => {
    return {
      ...state,
      temperatureUnit: temperatureUnit,
      isLoading: false,
      loaded: true,
    };
  }),
);
