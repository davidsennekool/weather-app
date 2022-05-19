import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { selectCurrentWeather, selectForecast } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-current-stats',
  templateUrl: './current-stats.component.html',
  styleUrls: ['./current-stats.component.scss']
})
export class CurrentStatsComponent implements OnInit {
  currentStats$ = this.store.select(selectCurrentWeather);
  forecast$ = this.store.select(selectForecast);
  temperatureUnit = localStorage.getItem('temperature_unit');

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

}
