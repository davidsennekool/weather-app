import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../../core/interfaces/current-weather';
import { Forecast } from '../../core/interfaces/forecast';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials' : 'true',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
  });

  constructor(
    private http: HttpClient,
  ) { }

  getCurrentWeather({ location }: { location: string }): Observable<CurrentWeather> {
    let options = {
      headers: this.headers,
      params: {
        q: location,
        appid: environment.appId,
      }
    };

    return this.http.get<CurrentWeather>(`${environment.corsUrl}${environment.baseUrl}/data/2.5/weather`, options).pipe(
      map((res: CurrentWeather): CurrentWeather => {
        return {
          ...res,
          wind: {
            ...res.wind,
            speed: Number((res.wind.speed * 3.6).toFixed(0))
          },
          weather: res.weather.map(weather => ({
            ...weather,
            icon: `/assets/images/weather-icons/${weather.icon}.svg`
          }))
        };
      })
    );
  }

  getForecastOneCall({ lat, lon }: { lat: number; lon: number }): Observable<Forecast> {
    let options = {
      headers: this.headers,
      params: {
        lat,
        lon,
        exclude: 'minutely,alerts',
        appid: environment.appId,
      }
    };
    return this.http.get<Forecast>(`${environment.corsUrl}${environment.baseUrl}/data/2.5/onecall`, options).pipe(
      map((res: Forecast): Forecast => {
        return {
          ...res,
          hourly: res.hourly.map(hourly => ({
            ...hourly,
            dt: new Date(hourly.dt as number * 1000),
            weather: hourly.weather.map(weather => ({
              ...weather,
              icon: `/assets/images/weather-icons/${weather.icon}.svg`
            }))
          })),
          daily: res.daily.map(daily => ({
            ...daily,
            pop: Math.floor(daily.pop * 100),
            wind_speed: Math.floor(daily.wind_speed * 3.6),
            weather: daily.weather.map(weather => ({
              ...weather,
              icon: `/assets/images/weather-icons/${weather.icon}.svg`
            }))
          }))
        }
      })
    );
  }
}
