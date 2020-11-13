import { Injectable } from '@angular/core';
import { IWeather } from '../interfaces/IMeteoInfo';

export interface IMinAndMax {
  min: number;
  max: number;
}

@Injectable({
  providedIn: 'root'
})
export class NumberAverageService {

  constructor() { }

  public calculMinAndMaxTemperature(weathers: IWeather[]): IMinAndMax {
    const minArray: number[] = weathers.map((weather: IWeather) => Number(weather.temperature_mini));
    const maxArray: number[] = weathers.map((weather: IWeather) => Number(weather.temperature_maxi));

    return {
      min: this.numAverageRounded(minArray),
      max: this.numAverageRounded(maxArray),
    };
  }

  public numAverageRounded(array: number[]): number {
    return Math.round(array.reduce((acc: number, value: number) => acc + value) / array.length * 10) / 10;
  }
}
