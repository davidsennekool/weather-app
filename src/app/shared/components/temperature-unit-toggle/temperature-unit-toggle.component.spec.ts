import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemperatureUnitToggleComponent } from './temperature-unit-toggle.component';

describe('TemperatureUnitToggleComponent', () => {
  let component: TemperatureUnitToggleComponent;
  let fixture: ComponentFixture<TemperatureUnitToggleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemperatureUnitToggleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemperatureUnitToggleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
