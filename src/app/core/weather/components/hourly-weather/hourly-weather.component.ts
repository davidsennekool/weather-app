import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentWeather } from 'src/app/core/interfaces/current-weather';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {
  weather$!: Observable<CurrentWeather>;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void { }

}
