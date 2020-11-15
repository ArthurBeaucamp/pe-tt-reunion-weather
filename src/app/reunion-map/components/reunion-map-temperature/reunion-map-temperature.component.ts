import { Component, Input, OnInit } from '@angular/core';
import { IWeather } from 'src/app/interfaces/IMeteoInfo';
import { IMinAndMax, NumberAverageService } from 'src/app/services/number-average.service';

@Component({
  selector: 'reunion-map-temperature',
  templateUrl: './reunion-map-temperature.component.html',
  styleUrls: ['./reunion-map-temperature.component.scss']
})
export class ReunionMapTemperatureComponent implements OnInit {
  @Input()
  public weathers: IWeather[];
  @Input()
  public onPopup: boolean = false;

  public minAndMaxAverage: IMinAndMax;

  constructor(
    private readonly numberAverageService: NumberAverageService,
  ) { }

  ngOnInit(): void {
    this.minAndMaxAverage = this.numberAverageService.calculMinAndMaxTemperature(this.weathers);
  }

}
