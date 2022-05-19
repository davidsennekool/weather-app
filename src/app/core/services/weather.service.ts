import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CurrentWeather } from '../interfaces/current-weather';
import { Forecast } from '../interfaces/forecast';

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
        exclude: 'minutely,alerts',
      }
    };

    return this.http.get<CurrentWeather>(`${environment.corsUrl}${environment.baseUrl}/data/2.5/weather`, options);
  }

  getForecast({ location }: { location: string }): Observable<Forecast> {
    let options = {
      headers: this.headers,
      params: {
        q: location,
        appid: environment.appId,
      }
    };
    return this.http.get<Forecast>(`${environment.corsUrl}${environment.baseUrl}/data/2.5/forecast`, options);
  }

  getForecastOneCall({ lat, lon }: { lat: number; lon: number }): Observable<any> {
    let options = {
      headers: this.headers,
      params: {
        lat,
        lon,
        exclude: 'minutely,alerts',
        appid: environment.appId,
      }
    };
    return this.http.get<any>(`${environment.corsUrl}${environment.baseUrl}/data/2.5/onecall`, options);
  }

  setTemperatureUnit(unit: string) {
    localStorage.setItem('temperature_unit', unit);
  }



  searchLocation(name: string) {
    const options = {
      headers: this.headers,
      params: {
        q: name,
        appid: environment.appId,
        limit: 5,
      }
    };
    if (name === '') {
      return of([]);
    }
    return this.http.get<[any, string[]]>(`${environment.corsUrl}${environment.baseUrl}/geo/1.0/direct`, options).pipe(
      tap((response) => {
        console.log(response)
      }),
      map((response: any) => {
        return [
          name,
          [
            ...response
          ]
        ]
      })
    );
  }
}
