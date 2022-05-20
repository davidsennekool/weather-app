import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from 'src/app/core/store/app.state';
import { selectCurrentTemperature, selectCurrentWeatherIcon, selectIsLoading } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.scss']
})
export class CurrentTemperatureComponent {
  temperatureUnit = localStorage.getItem('temperature_unit');
  localDate = new Date();
  isLoading$ = this.store.select(selectIsLoading);
  currentTemperature$ = this.store.select(selectCurrentTemperature);
  currentWeatherIcon$ = this.store.select(selectCurrentWeatherIcon);

  constructor(
    private store: Store<AppState>,
  ) { }
}
