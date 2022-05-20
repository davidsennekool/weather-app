import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/app.state';
import { selectTemperatureUnit } from 'src/app/core/store/temperature/temperature.selectors';
import { selectCurrentTemperature, selectCurrentWeatherIcon, selectIsLoading } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.scss']
})
export class CurrentTemperatureComponent {
  isLoading$ = this.store.select(selectIsLoading);
  temperatureUnit$ = this.store.select(selectTemperatureUnit);
  currentTemperature$ = this.store.select(selectCurrentTemperature);
  currentWeatherIcon$ = this.store.select(selectCurrentWeatherIcon);
  localDate = new Date();

  constructor(
    private store: Store<AppState>,
  ) { }
}
