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
import { HttpClientModule } from '@angular/common/http';
import { ReunionMapLeafletPopupComponent } from './reunion-map/components/reunion-map-leaflet/components/reunion-map-leaflet-popup/reunion-map-leaflet-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ReunionMapComponent,
    ReunionMapInfosComponent,
    InfosTitlePipe,
    ReunionMapTemperatureComponent,
    ReunionMapWeatherInfosComponent,
    ReunionMapLeafletComponent,
    ReunionMapLeafletPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ReunionMapLeafletPopupComponent]
})
export class AppModule { }
