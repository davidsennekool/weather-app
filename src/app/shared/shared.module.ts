import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { NthElementPipe } from './pipes/nth-element.pipe';
import { LocationSearchComponent } from './components/location-search/location-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TemperaturePipe,
    NthElementPipe,
    LocationSearchComponent,
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
    LocationSearchComponent,
  ]
})
export class SharedModule { }
