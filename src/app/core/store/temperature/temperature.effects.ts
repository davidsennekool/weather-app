import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from "rxjs";

import { setTemperatureUnit, setTemperatureUnitSuccess } from "./temperature.actions";

@Injectable()
export class TemperatureEffects {
  setTemperatureUnit$ = createEffect(() =>this.actions$.pipe(
    ofType(setTemperatureUnit),
    map(({ unit } ) => setTemperatureUnitSuccess({ unit }))
  ));

  constructor(
    private actions$: Actions,
  ) {}
}
