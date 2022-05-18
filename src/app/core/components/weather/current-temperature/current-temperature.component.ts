import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from 'src/app/core/interfaces/weather';
import { WeatherService } from 'src/app/core/services/weather.service';

@Component({
  selector: 'app-current-temperature',
  templateUrl: './current-temperature.component.html',
  styleUrls: ['./current-temperature.component.scss']
})
export class CurrentTemperatureComponent {
  weather$: Observable<Weather>;
  temperatureUnit = localStorage.getItem('temperature_unit');
  localDate = new Date();

  constructor(
    private weatherService: WeatherService,
  ) {
    this.weather$ = this.weatherService.getWeather({lat: '53.2190652', lon: '6.5680077'});
  }
}
