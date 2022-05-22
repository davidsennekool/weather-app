import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastTableColumnComponent } from './forecast-table-column.component';

describe('ForecastTableColumnComponent', () => {
  let component: ForecastTableColumnComponent;
  let fixture: ComponentFixture<ForecastTableColumnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastTableColumnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForecastTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
