import { Component } from '@angular/core';
import MeteoInfo from '../assets/meteo.json';
import { IWeatherInfoJson } from './interfaces/IMeteoInfo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pe-tt-reunion-weather';

  public meteoInfo: IWeatherInfoJson = MeteoInfo;
}
