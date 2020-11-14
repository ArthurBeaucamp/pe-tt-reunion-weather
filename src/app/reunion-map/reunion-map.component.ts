import { Component, Input, OnInit } from '@angular/core';
import { IWeatherInfoJson } from '../interfaces/IMeteoInfo';

@Component({
  selector: 'reunion-map',
  templateUrl: './reunion-map.component.html',
  styleUrls: ['./reunion-map.component.scss']
})
export class ReunionMapComponent implements OnInit {
  @Input()
  public weatherJson: IWeatherInfoJson;

  constructor() { }

  ngOnInit(): void {
  }
}
