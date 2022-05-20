import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { CoreModule } from './core/core.module';
import { WeatherEffects } from './core/store/weather/weather.effects';
import { weatherReducer } from './core/store/weather/weather.reducer';
import { SharedModule } from './shared/shared.module';
import { temperatureUnitReducer } from './core/store/temperature/temperature.reducer';
import { TemperatureEffects } from './core/store/temperature/temperature.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      weather: weatherReducer,
      temperature: temperatureUnitReducer
    }),
    EffectsModule.forRoot([WeatherEffects, TemperatureEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
