import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReunionMapComponent } from './reunion-map/reunion-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { ReunionMapInfosComponent } from './reunion-map/components/reunion-map-infos/reunion-map-infos.component';
import { InfosTitlePipe } from './pipes/infos-title.pipe';
import { ReunionMapTemperatureComponent } from './reunion-map/components/reunion-map-temperature/reunion-map-temperature.component';
import { ReunionMapHumidityComponent } from './reunion-map/components/reunion-map-humidity/reunion-map-humidity.component';
import { ReunionMapWeatherInfosComponent } from './reunion-map/components/reunion-map-weather-infos/reunion-map-weather-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    ReunionMapComponent,
    ReunionMapInfosComponent,
    InfosTitlePipe,
    ReunionMapTemperatureComponent,
    ReunionMapHumidityComponent,
    ReunionMapWeatherInfosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
