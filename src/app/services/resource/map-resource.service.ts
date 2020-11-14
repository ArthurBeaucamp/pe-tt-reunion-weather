import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EAddressType, IAddressInformations } from 'src/app/interfaces/IMap';

interface IParams {
  name: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class MapResourceService {

  constructor(
    private readonly httpClient: HttpClient,
  ) {}

  // GET /search https://geo.api.gouv.fr/adresse
  public getAddressInfos(
    address: string,
    lat: number,
    lng: number,
    type: EAddressType = EAddressType.municipality,
  ): Observable<IAddressInformations> {
    return this.httpClient.get<IAddressInformations>('https://api-adresse.data.gouv.fr/search/', {
      params: this.createParamsObject([
        { name: 'q', value: address },
        { name: 'type', value: type },
        { name: 'lat', value: lat.toString() },
        { name: 'lon', value: lng.toString() },
      ])
    });
  }

  private createParamsObject(paramsArray: IParams[]): HttpParams {
    let params: HttpParams = new HttpParams();

    paramsArray.forEach((param) => {
      params = params.append(param.name, param.value);
    });

    return params;
  }
}
