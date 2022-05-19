import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchCurrentWeather } from 'src/app/core/store/actions/weather.actions';

@Component({
  selector: 'app-location-search',
  templateUrl: './location-search.component.html',
  styleUrls: ['./location-search.component.scss']
})
export class LocationSearchComponent {
  location$: Observable<{name: string}> = this.store.select('location');
  location = 'Groningen';

  constructor(
    private store: Store<{ location: { name: string } }>
  ) { }

  search(searchForm: NgForm) {
    if (searchForm.invalid) return;
    this.store.dispatch(fetchCurrentWeather({ location: this.location }));
  }

}
