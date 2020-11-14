import { Component, AfterViewInit } from '@angular/core';
import { IGeographicCoordinates } from 'src/app/interfaces/IMap';

import * as Leaflet from 'leaflet';

@Component({
  selector: 'reunion-map-leaflet',
  templateUrl: './reunion-map-leaflet.component.html',
  styleUrls: ['./reunion-map-leaflet.component.scss']
})
export class ReunionMapLeafletComponent implements AfterViewInit {
  public map;

  constructor() { }

  ngAfterViewInit(): void {
    this.createMap();
  }

  public createMap(): void {
    const reunionIsland: IGeographicCoordinates = {
      lat: -21.115141,
      lng: 55.536384,
    };

    const zoomLevel: number = 10;

    this.map = Leaflet.map('map', {
      center: [reunionIsland.lat, reunionIsland.lng],
      zoom: zoomLevel,
    });

    const mainLayer = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 10,
      maxZoom: 14,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
  }

}
