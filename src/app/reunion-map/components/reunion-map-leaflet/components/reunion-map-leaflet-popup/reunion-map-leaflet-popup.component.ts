import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/interfaces/IMeteoInfo';

@Component({
  selector: 'reunion-map-leaflet-popup',
  templateUrl: './reunion-map-leaflet-popup.component.html',
  styleUrls: ['./reunion-map-leaflet-popup.component.scss']
})
export class ReunionMapLeafletPopupComponent implements OnInit {
  @Input()
  public weather: IWeather;

  constructor() { }

  ngOnInit(): void {
  }

}
