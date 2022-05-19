import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CurrentWeather } from 'src/app/core/interfaces/current-weather';
import { WeatherService } from 'src/app/core/services/weather.service';
import { AppState } from 'src/app/core/store/app.state';
import { WeatherState } from 'src/app/core/store/weather/weather.reducer';
import { selectCurrentTemperature, selectCurrentWeather, selectIsLoading } from 'src/app/core/store/weather/weather.selectors';

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

  constructor(
    private weatherService: WeatherService,
    private store: Store<AppState>,
  ) { }
}
