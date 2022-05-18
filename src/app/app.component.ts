import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './core/interfaces/weather';
import { WeatherService } from './core/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  weather$: Observable<Weather>;
  temperatureUnit = localStorage.getItem('temperature_unit');
  localDate = new Date();

  constructor(
    private weatherService: WeatherService,
  ) {
    this.weather$ = this.weatherService.getWeather({lat: '53.2190652', lon: '6.5680077'});
  }

  ngOnInit() {
    localStorage.setItem('temperature_unit', 'C');
  }
}
