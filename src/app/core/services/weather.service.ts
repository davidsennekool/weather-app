import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
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
        exclude: 'minutely,alerts',
      }
    };

    return this.http.get<Weather>(`${environment.corsUrl}${environment.baseUrl}/onecall`, options).pipe(
      map(o => {
        let hourly = o.hourly?.map(hourly => {
          return {
            ...hourly,
            dt: hourly.dt * 1000
          };
        });
        let daily = o.daily.map(daily => {
          return {
            ...daily,
            dt: daily.dt * 1000
          }
        });
        return {
          ...o,
          daily,
          hourly
        };
      })
    );
  }

  setTemperatureUnit(unit: string) {
    localStorage.setItem('temperature_unit', unit);
  }
}
