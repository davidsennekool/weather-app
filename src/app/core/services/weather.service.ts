import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../interfaces/current-weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  constructor(
    private http: HttpClient,
  ) { }

  getCurrentWeather(location: string): Observable<CurrentWeather> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }),
      params: {
        q: location,
        appid: environment.appId,
        exclude: 'minutely,alerts',
      }
    };

    return this.http.get<CurrentWeather>(`${environment.corsUrl}${environment.baseUrl}/data/2.5/weather`, options).pipe(
      map(o => ({
        ...o,
        location: location
      }))
      // map(o => {
      //   let hourly = o.hourly?.map(hourly => {
      //     return {
      //       ...hourly,
      //       dt: hourly.dt * 1000
      //     };
      //   });
      //   let daily = o.daily.map(daily => {
      //     return {
      //       ...daily,
      //       dt: daily.dt * 1000
      //     }
      //   });
      //   return {
      //     ...o,
      //     daily,
      //     hourly
      //   };
      // })
    );
  }

  getForecast(location: string): Observable<CurrentWeather> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials' : 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': '*',
      }),
      params: {
        q: location,
        appid: environment.appId,
      }
    };
    return this.http.get<CurrentWeather>(`${environment.corsUrl}${environment.baseUrl}/data/2.5/forecast`, options);
  }

  setTemperatureUnit(unit: string) {
    localStorage.setItem('temperature_unit', unit);
  }
}
