import { Component, OnInit } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, Observable, of, OperatorFunction, switchMap, tap } from 'rxjs';
import { WeatherService } from './core/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  model: any;
  searching = false;
  searchFailed = false;

  constructor(
    private weatherService: WeatherService,
  ) { }

  ngOnInit() {
    localStorage.setItem('temperature_unit', 'C');
  }

  // search: OperatorFunction<string, readonly string[]> = (text$: Observable<string>) => {
  //   text$.pipe(
  //     debounceTime(300),
  //     distinctUntilChanged(),
  //     tap(() => this.searching = true),
  //     switchMap(term =>
  //       this.weatherService.searchLocation(term).pipe(
  //         tap(() => this.searchFailed = false),
  //         catchError(() => {
  //           this.searchFailed = true;
  //           return of([]);
  //         }))
  //     ),
  //     tap(() => this.searching = false)
  //   )
  // }
}
