import { createAction, props } from "@ngrx/store";

// Create temperature unit actions
export const setTemperatureUnit = createAction(
  '[TemperatureUnit] Set Temperature Unit',
  props<{ unit: string; }>()
);

export const setTemperatureUnitSuccess = createAction(
  '[TemperatureUnit] Set Temperature Unit Success',
  props<{ unit: string; }>()
);
