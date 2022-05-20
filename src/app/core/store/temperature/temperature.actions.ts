import { createAction, props } from "@ngrx/store";

// Create weather actions
export const loadTemperatureUnit = createAction(
  '[TemperatureUnit] Load Temperature Unit',
  props<{ temperatureUnit: string; }>()
);

export const loadTemperatureUnitSuccess = createAction(
  '[TemperatureUnit] Load Temperature Unit Success',
  props<{ temperatureUnit: string; }>()
);
