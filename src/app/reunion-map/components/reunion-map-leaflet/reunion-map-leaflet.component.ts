import { Component, AfterViewInit, OnInit, Input, Injector } from '@angular/core';
import { IAddressInformations, IGeographicCoordinates } from 'src/app/interfaces/IMap';
import * as Leaflet from 'leaflet';
import { MapResourceService } from 'src/app/services/resource/map-resource.service';
import { forkJoin } from 'rxjs';
import { IWeather } from 'src/app/interfaces/IMeteoInfo';
import { createCustomElement, NgElement, WithProperties } from '@angular/elements';
import { ReunionMapLeafletPopupComponent } from './components/reunion-map-leaflet-popup/reunion-map-leaflet-popup.component';

@Component({
  selector: 'reunion-map-leaflet',
  templateUrl: './reunion-map-leaflet.component.html',
  styleUrls: ['./reunion-map-leaflet.component.scss']
})
export class ReunionMapLeafletComponent implements OnInit, AfterViewInit {
  @Input()
  public weathers: IWeather[] = [];

  public citysGeographicCoordinates: IGeographicCoordinates[] = [];
  public reunionIsland: IGeographicCoordinates = {
    lat: -21.115141,
    lng: 55.536384,
  };

  public map;
  public markerIcon = new Leaflet.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon.png',
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-icon-2x.png',
    iconSize:    [25, 41],
    iconAnchor:  [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    shadowSize:  [41, 41],
  });

  constructor(
    private readonly mapResourceService: MapResourceService,
    private readonly injector: Injector,
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
    this.citysGeographicCoordinates.forEach((cityGeographicCoordinates: IGeographicCoordinates, index: number) => {
      const marker = Leaflet.marker(
        [cityGeographicCoordinates.lat, cityGeographicCoordinates.lng],
        { icon: this.markerIcon }
      );

      const popupName: string = `popup-element-${this.weathers[index].id.toLowerCase().replace(/ /g, '-')}`;

      const PopupElement = createCustomElement(ReunionMapLeafletPopupComponent, { injector: this.injector });
      customElements.define(popupName, PopupElement);

      const popupComponent: NgElement & WithProperties<ReunionMapLeafletPopupComponent> = document.createElement(popupName) as any;
      popupComponent.weather = this.weathers[index];

      marker.addTo(this.map).bindPopup(popupComponent);
    });
  }

}
