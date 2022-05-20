import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { NthElementPipe } from './pipes/nth-element.pipe';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WindDirectionPipe } from './pipes/wind-direction.pipe';
import { TemperatureUnitToggleComponent } from './components/temperature-unit-toggle/temperature-unit-toggle.component';

@NgModule({
  declarations: [
    TemperaturePipe,
    NthElementPipe,
    LocationSearchComponent,
    WindDirectionPipe,
    TemperatureUnitToggleComponent,
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
  ]
})
export class SharedModule { }
