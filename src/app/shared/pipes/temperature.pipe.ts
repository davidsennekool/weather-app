import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(value: number | null | undefined, arg: string | null): number {
    let temperature: number = 0;

    if (value) {
      if (arg === 'F') {
        temperature = (value - 273.15) * (9/5) + 32;
      } else if (arg === 'C') {
        temperature = value - 273.15;
      }
    }
    return Math.floor(temperature);
  }

}
