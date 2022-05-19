import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CurrentWeather } from 'src/app/core/interfaces/current-weather';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.scss']
})
export class CurrentTemperatureComponent {
  weather$: Observable<CurrentWeather>;
  temperatureUnit = localStorage.getItem('temperature_unit');
  localDate = new Date();
  // location$: Observable<{name: string}>;
  currentWeather$: Observable<CurrentWeather> | undefined;

  constructor(
    private weatherService: WeatherService,
    // private store: Store<{location: {name: string}}>,
  ) {
    this.weather$ = this.weatherService.getCurrentWeather('Groningen');
    // this.location$ = store.select('location');
    // this.location$.subscribe(location => {
    //   this.currentWeather$ = this.weatherService.getCurrentWeather(location.name);
    // })
  }
}
