import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/store/app.state';
import { selectIsLoading } from 'src/app/core/store/weather/weather.selectors';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss']
})
export class SpinnerOverlayComponent implements OnInit {
  isLoading$ = this.store.select(selectIsLoading);

  constructor(
    private store: Store<AppState>,
  ) { }

  ngOnInit(): void {
  }

}
