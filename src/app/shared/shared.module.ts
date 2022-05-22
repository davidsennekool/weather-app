import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { NthElementPipe } from './pipes/nth-element.pipe';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { WindDirectionPipe } from './pipes/wind-direction.pipe';
import { TemperatureUnitToggleComponent } from './components/temperature-unit-toggle/temperature-unit-toggle.component';
import { UvGaugeComponent } from './components/uv-gauge/uv-gauge.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';

@NgModule({
  declarations: [
    TemperaturePipe,
    NthElementPipe,
    LocationSearchComponent,
    WindDirectionPipe,
    TemperatureUnitToggleComponent,
    UvGaugeComponent,
    SpinnerComponent,
    SpinnerOverlayComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule
  ],
  exports: [
    TemperaturePipe,
    NthElementPipe,
    WindDirectionPipe,
    LocationSearchComponent,
    TemperatureUnitToggleComponent,
    UvGaugeComponent,
    SpinnerComponent,
    SpinnerOverlayComponent,
  ]
})
export class SharedModule { }
