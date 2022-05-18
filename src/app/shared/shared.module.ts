import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturePipe } from './pipes/temperature.pipe';
import { NthElementPipe } from './pipes/nth-element.pipe';

@NgModule({
  declarations: [
    TemperaturePipe,
    NthElementPipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemperaturePipe,
    NthElementPipe,
  ]
})
export class SharedModule { }
