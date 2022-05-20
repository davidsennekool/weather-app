import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { selectForecast } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {
  weather$ = this.store.select(selectForecast);
  temperatureUnit = localStorage.getItem('temperature_unit');

  constructor(
    private store: Store<AppState>
  ) { }

  ngOnInit(): void { }

}
