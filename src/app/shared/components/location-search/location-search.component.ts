import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { WeatherService } from 'src/app/core/services/weather.service';

import { AppState } from 'src/app/core/store/app.state';
import { loadWeather } from 'src/app/core/store/weather/weather.actions';
import { selectIsLoading } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent implements OnInit {
  isLoading$ = this.store.select(selectIsLoading);
  location!: string;

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadWeather({ location: 'Groningen' }));
    // navigator.geolocation.watchPosition((position) => {
    //   this.store.dispatch(loadWeather({ location: 'Groningen' }));
    // });
  }

  search(searchForm: NgForm) {
    if (searchForm.invalid) return;
    this.store.dispatch(loadWeather({ location: this.location }));
  }
}
