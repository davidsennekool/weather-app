import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from 'src/app/core/interfaces/current-weather';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {
  weather$!: Observable<CurrentWeather>;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.weather$ = this.weatherService.getCurrentWeather('Groningen');
  }

}
