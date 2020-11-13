import { TestBed } from '@angular/core/testing';
import { IWeather } from '../interfaces/IMeteoInfo';

import { NumberAverageService } from './number-average.service';

const WEATHERS_INFOS: IWeather = {
  id: '', temperature_maxi: '', temperature_mini: '', temps: '', vent_direction: '', vent_force: '', humidite: ''
};

const WEATHERS: IWeather[] = [
  { ...WEATHERS_INFOS, temperature_mini: '10', temperature_maxi: '40.3' },
  { ...WEATHERS_INFOS, temperature_mini: '5.3', temperature_maxi: '60.21' },
  { ...WEATHERS_INFOS, temperature_mini: '2.5', temperature_maxi: '36' },
  { ...WEATHERS_INFOS, temperature_mini: '16.23', temperature_maxi: '42' },
];

describe('NumberAverageService', () => {
  let service: NumberAverageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumberAverageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Should return average temperature', () => {
    expect(service.calculMinAndMaxTemperature(WEATHERS)).toEqual({
      min: 8.5,
      max: 44.6,
    });
  });
});
