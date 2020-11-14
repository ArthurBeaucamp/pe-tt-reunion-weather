export enum EAddressType {
  housenumber = 'housenumber',
  street = 'street',
  locality = 'locality',
  municipality = 'municipality',
}

export interface IGeographicCoordinates {
  lat: number;
  lng: number;
}

export interface IAddressInformations {
  type: string;
  version: string;
  features: IAddressInformationsFeature[];
  filters: IAddressInformationsFilters;
  attribution: string;
  licence: string;
  query: string;
  limit: number;
}

export interface IAddressInformationsFeature {
  type: string;
  geometry: IAddressInformationsFeatureGeometry;
  properties: IAddressInformationsFeatureProperties;
}

export interface IAddressInformationsFeatureGeometry {
  type: string;
  coordinates: number[];
}

export interface IAddressInformationsFeatureProperties {
  label: string;
  score: number;
  housenumber: string;
  id: string;
  type: string;
  name: string;
  postcode: string;
  citycode: string;
  x: number;
  y: number;
  city: string;
  context: string;
  importance: number;
  street: string;
}

export interface IAddressInformationsFilters {
  type?: EAddressType;
}
