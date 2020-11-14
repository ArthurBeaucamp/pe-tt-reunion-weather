import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReunionMapComponent } from './reunion-map/reunion-map.component';
import { ReunionMapInfosComponent } from './reunion-map/components/reunion-map-infos/reunion-map-infos.component';
import { InfosTitlePipe } from './pipes/infos-title.pipe';
import { ReunionMapTemperatureComponent } from './reunion-map/components/reunion-map-temperature/reunion-map-temperature.component';
import { ReunionMapWeatherInfosComponent } from './reunion-map/components/reunion-map-weather-infos/reunion-map-weather-infos.component';
import { ReunionMapLeafletComponent } from './reunion-map/components/reunion-map-leaflet/reunion-map-leaflet.component';

@NgModule({
  declarations: [
    AppComponent,
    ReunionMapComponent,
    ReunionMapInfosComponent,
    InfosTitlePipe,
    ReunionMapTemperatureComponent,
    ReunionMapWeatherInfosComponent,
    ReunionMapLeafletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
