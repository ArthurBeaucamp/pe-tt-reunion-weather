import { Component, AfterViewInit, OnInit, Input } from '@angular/core';
import { IAddressInformations, IGeographicCoordinates } from 'src/app/interfaces/IMap';

import * as Leaflet from 'leaflet';
import { MapResourceService } from 'src/app/services/resource/map-resource.service';
import { forkJoin } from 'rxjs';
import { IWeather } from 'src/app/interfaces/IMeteoInfo';

@Component({
  selector: 'reunion-map-leaflet',
  templateUrl: './reunion-map-leaflet.component.html',
  styleUrls: ['./reunion-map-leaflet.component.scss']
})
export class ReunionMapLeafletComponent implements OnInit, AfterViewInit {
  @Input()
  public weathers: IWeather[] = [];

  public reunionIsland: IGeographicCoordinates = {
    lat: -21.115141,
    lng: 55.536384,
  };

  public map;
  public citysGeographicCoordinates: IGeographicCoordinates[] = [];

  constructor(
    private readonly mapResourceService: MapResourceService,
  ) { }

  ngOnInit(): void {
    this.getCityGeographicCoordinates();
  }

  ngAfterViewInit(): void {
    this.createMap();
  }

  public getCityGeographicCoordinates(): void {
    forkJoin(
      this.weathers.map((weather: IWeather) => this.mapResourceService.getAddressInfos(
        weather.id,
        this.reunionIsland.lat,
        this.reunionIsland.lng,
      )) || []
    ).subscribe({
      next: (addressInformations: IAddressInformations[]): void => {
        this.citysGeographicCoordinates = addressInformations.map((addressInformation: IAddressInformations) => {
          return {
            lat: addressInformation.features[0].geometry.coordinates[1],
            lng: addressInformation.features[0].geometry.coordinates[0],
          };
        });

        this.addMapMarkers();
      },
      error: (error: Error): void => {
        console.error(error.message);
      }
    });
  }

  public createMap(): void {
    const zoomLevel: number = 10;

    this.map = Leaflet.map('map', {
      center: [this.reunionIsland.lat, this.reunionIsland.lng],
      zoom: zoomLevel,
    });

    const mainLayer = Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      minZoom: 10,
      maxZoom: 14,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });

    mainLayer.addTo(this.map);
  }

  addMapMarkers(): void {
    // TODO à partir de citysGeographicCoordinates créer les markers de la map
  }

}
