import { Component, Input, OnInit } from '@angular/core';
import { IWeather, IWeatherInfoJson } from '../interfaces/IMeteoInfo';

@Component({
  selector: 'reunion-map',
  templateUrl: './reunion-map.component.html',
  styleUrls: ['./reunion-map.component.scss']
})
export class ReunionMapComponent implements OnInit {
  @Input()
  public weatherJson: IWeatherInfoJson;

  public zoom: number = 10;
  public center;
  public options = {
    mapTypeId: 'hybrid',
  };

  public markers = [];
  public positions: { lat: number, lng: number }[] = [];

  constructor() { }

  ngOnInit(): void {
    this.center = {
      lat: -21.115141,
      lng: 55.536384,
    };

    this.addMarkers();
  }

  public addMarkers(): void {
    this.weatherJson.meteo.bulletin.ville.forEach((weather: IWeather) => {
      this.geocode(weather.id).then(place => {
        this.markers.push({
          position: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
          label: {
            color: '#E1E1E1',
            text: `${weather.temperature_maxi}`
          }
        });
      })
      .catch(err => {
        console.error(err);
      });
    });
  }

  geocode(address: string): Promise<any> {
    const geocoder = new google.maps.Geocoder();
    return new Promise((resolve, reject) => {
      geocoder.geocode(
        { address },
        (results, status) => {
          if (status === google.maps.GeocoderStatus.OK) {
            resolve(results[0]);
          } else {
            reject(new Error(status));
          }
        }
      );
    });
  }
}
