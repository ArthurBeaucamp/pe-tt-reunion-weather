export interface IWeatherInfoJson {
  meteo: {
    bulletin: IReport;
    previsions: IForecasts;
  };
}

export interface IReport {
  sujet: string;
  date: string;
  introduction: string;
  situation: string;
  previsions: string;
  pression: IPresure;
  ville: IWeather[];
}

export interface IForecasts {
  prevision: IForecast[];
}

export interface IForecast {
  date: string;
  ville: IWeather[];
}

export interface IPresure {
  date: string;
  lieu: string;
  text: string;
}

export interface IWeather {
  id: string;
  temperature_mini: string;
  temperature_maxi: string;
  temps: string;
  vent_direction: string;
  vent_force: string;
  vent_rafales?: string;
  humidite: string;
}
