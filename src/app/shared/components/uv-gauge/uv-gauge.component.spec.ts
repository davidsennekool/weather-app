import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvGaugeComponent } from './uv-gauge.component';

describe('UvGaugeComponent', () => {
  let component: UvGaugeComponent;
  let fixture: ComponentFixture<UvGaugeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UvGaugeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UvGaugeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
