import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-uv-gauge',
  templateUrl: './uv-gauge.component.html',
  styleUrls: ['./uv-gauge.component.scss']
})
export class UvGaugeComponent {
  @Input() uvIndex!: number;
  meterRotation = ((this.uvIndex * 180) / 11);

  constructor() { }

}
