import { Pipe, PipeTransform } from '@angular/core';
import { Hourly } from 'src/app/core/interfaces/forecast';

@Pipe({
  name: 'nthElement'
})
export class NthElementPipe implements PipeTransform {

  transform(value: Hourly[] | undefined, arg: number): Hourly[] {
    if (value === undefined) return [];
    if (!this.supports(value)) {throw new Error('Error in nthElementPipe')};
    return value.filter((v, i) => (i % arg === 0));
  }

  private supports(obj: any): boolean {
    return typeof obj === 'string' || Array.isArray(obj);
  }

}
