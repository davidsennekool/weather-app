import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/core/interfaces/weather';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-hourly-weather',
  templateUrl: './hourly-weather.component.html',
  styleUrls: ['./hourly-weather.component.scss']
})
export class HourlyWeatherComponent implements OnInit {
  weather$!: Observable<Weather>;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit(): void {
    this.weather$ = this.weatherService.getWeather({lat: '53.2190652', lon: '6.5680077'});
  }

}
