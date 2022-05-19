import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number | null | undefined, ...args: unknown[]): number {
    let temperature: number = 0;
    const tempSetting = localStorage.getItem('temperature_unit');
    if (tempSetting === 'F' && value) {
      temperature = (value - 273.15) * (9/5) + 32;
    } else if (tempSetting === 'C' && value) {
      temperature = value - 273.15;
    }
    return Math.floor(temperature);
  }

}
