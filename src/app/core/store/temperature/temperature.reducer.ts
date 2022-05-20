import { createReducer, on } from "@ngrx/store";

import { setTemperatureUnit, setTemperatureUnitSuccess } from "./temperature.actions";

interface InitialState {
  unit: string
  isLoading: boolean;
  loaded: boolean;
};

const initialState: InitialState = {
  unit: 'C',
  isLoading: false,
  loaded: false,
};

export const temperatureUnitReducer = createReducer(
  initialState,
  on(setTemperatureUnit, (state) => ({
    ...state,
    isLoading: true,
  })),
  on(setTemperatureUnitSuccess, (state, { unit }) => {
    return {
      ...state,
      unit,
      isLoading: false,
      loaded: true,
    };
  }),
);
