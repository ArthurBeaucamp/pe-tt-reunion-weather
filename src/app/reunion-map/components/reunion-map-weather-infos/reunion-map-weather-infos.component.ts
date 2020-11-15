import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/interfaces/IMeteoInfo';
import { NumberAverageService } from 'src/app/services/number-average.service';

@Component({
  selector: 'reunion-map-weather-infos',
  templateUrl: './reunion-map-weather-infos.component.html',
  styleUrls: ['./reunion-map-weather-infos.component.scss']
})
export class ReunionMapWeatherInfosComponent implements OnInit {
  @Input()
  public weathers: IWeather[];
  @Input()
  public onPopup: boolean = false;

  public humidity: number;
  public windDirection: string;

  constructor(
    private readonly numberAverageService: NumberAverageService,
  ) { }

  ngOnInit(): void {
    this.humidity = this.numberAverageService.numAverageRounded(this.weathers.map((weather: IWeather) => Number(weather.humidite)));

    const windForce: number[] = this.weathers.map((weather: IWeather) => Number(weather.vent_force));

    this.windDirection = `${this.weathers[0].vent_direction} ${this.numberAverageService.numAverageRounded(windForce)}`;
  }

}
