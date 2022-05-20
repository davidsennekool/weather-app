import { Pipe, PipeTransform } from '@angular/core';
import { Hourly } from 'src/app/core/interfaces/forecast';

@Pipe({
  name: 'nthElement'
})
export class NthElementPipe implements PipeTransform {

  transform(value: Hourly[] | undefined, arg: number): Hourly[] {
    if (value === undefined || value === null ) return [];
    return value.filter((v: Hourly, i) => (i % arg === 0));
  }

}
