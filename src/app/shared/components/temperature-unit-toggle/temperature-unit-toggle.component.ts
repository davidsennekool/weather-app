import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/app.state';
import { loadTemperatureUnit } from 'src/app/core/store/temperature/temperature.actions';
import { selectTemperatureUnit } from 'src/app/core/store/temperature/temperature.selectors';

@Component({
  selector: 'app-temperature-unit-toggle',
  templateUrl: './temperature-unit-toggle.component.html',
  styleUrls: ['./temperature-unit-toggle.component.scss']
})
export class TemperatureUnitToggleComponent {
  temperatureUnit$ = this.store.select(selectTemperatureUnit);

  constructor(
    private store: Store<AppState>
  ) { }

  toggleTemperatureUnit(unit: 'C' | 'F'): void {
    console.log('gets here', unit)
    this.store.dispatch(loadTemperatureUnit({ temperatureUnit: unit }));
  }
}
