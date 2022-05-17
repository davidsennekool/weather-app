import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Weather } from '../interfaces/weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private http: HttpClient,
  ) { }

  getWeather(data: {lat: string, lon: string}): Observable<Weather> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }),
      params: {
        lat: data.lat,
        lon: data.lon,
        appid: environment.appId,
        exclude: 'minutely,hourly,alerts',
      }
    };

    return this.http.get<Weather>(`${environment.corsUrl}${environment.baseUrl}/onecall`, options);
  }

  setTemperatureUnit(unit: string) {
    localStorage.setItem('temperature_unit', unit);
  }
}
