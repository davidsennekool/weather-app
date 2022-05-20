import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from "rxjs";

import { loadTemperatureUnit, loadTemperatureUnitSuccess } from "./temperature.actions";

@Injectable()
export class TemperatureEffects {
  loadTemperatureUnit$ = createEffect(() =>this.actions$.pipe(
    ofType(loadTemperatureUnit),
    map(({ temperatureUnit } ) => loadTemperatureUnitSuccess({ temperatureUnit }))
  ));

  constructor(
    private actions$: Actions,
  ) {}
}
