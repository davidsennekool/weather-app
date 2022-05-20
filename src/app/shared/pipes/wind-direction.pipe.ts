import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windDirection'
})
export class WindDirectionPipe implements PipeTransform {

  transform(value: number | null | undefined): string {
    if (!value) return '';
    if (value >= 348.75 || value < 11.25) return 'N'
    else if (value >= 11.25 && value < 33.75) return 'NNE'
    else if (value >= 33.75 && value < 56.25) return 'NE'
    else if (value >= 56.25 && value < 78.75) return 'ENE'
    else if (value >= 78.75 && value < 101.25) return 'E'
    else if (value >= 101.25 && value < 123.75) return 'ESE'
    else if (value >= 123.75 && value < 146.25) return 'SE'
    else if (value >= 146.25 && value < 168.75) return 'SSE'
    else if (value >= 168.75 && value < 191.25) return 'S'
    else if (value >= 191.25 && value < 213.75) return 'SSW'
    else if (value >= 213.75 && value < 236.25) return 'SW'
    else if (value >= 236.25 && value < 258.75) return 'WSW'
    else if (value >= 258.75 && value < 281.25) return 'W'
    else if (value >= 281.25 && value < 303.75) return 'WNW'
    else if (value >= 303.75 && value < 326.25) return 'NW'
    else if (value >= 326.25 && value < 348.75) return 'NNW'
    else return '';
  }

}
