import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { selectTemperatureUnit } from 'src/app/core/store/temperature/temperature.selectors';
import { selectForecast } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent {
  weather$ = this.store.select(selectForecast);
  temperatureUnit$ = this.store.select(selectTemperatureUnit);

  constructor(
    private store: Store<AppState>
  ) { }
}
