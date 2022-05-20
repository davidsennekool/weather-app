import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from './core/store/app.state';
import { loadTemperatureUnit } from './core/store/temperature/temperature.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.store.dispatch(loadTemperatureUnit({ temperatureUnit: 'C' }));
  }
}
