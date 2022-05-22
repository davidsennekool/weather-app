import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forecast-table-column',
  templateUrl: './forecast-table-column.component.html',
  styleUrls: ['./forecast-table-column.component.scss']
})
export class ForecastTableColumnComponent {
  @Input() tag?: string | null;

  constructor() { }

}
