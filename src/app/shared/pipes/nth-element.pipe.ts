import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nthElement'
})
export class NthElementPipe implements PipeTransform {

  transform(value: any[], arg?: number): any[] {
    if (value === null || arg === undefined) return value;
    if (!this.supports(value)) {throw new Error('Error in nthElementPipe')};
    return value.filter((v, i) => (i % arg === 0));
  }

  private supports(obj: any): boolean {
    return typeof obj === 'string' || Array.isArray(obj);
  }

}
