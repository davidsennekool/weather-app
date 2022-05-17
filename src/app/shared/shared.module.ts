import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemperaturePipe } from './pipes/temperature.pipe';

@NgModule({
  declarations: [
    TemperaturePipe,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TemperaturePipe,
  ]
})
export class SharedModule { }
