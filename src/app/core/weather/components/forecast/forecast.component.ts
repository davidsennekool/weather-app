import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentWeather } from 'src/app/core/interfaces/current-weather';
import { AppState } from 'src/app/core/store/app.state';
import { selectForecast } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  forecast$ = this.store.select(selectForecast);

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void { }

}
