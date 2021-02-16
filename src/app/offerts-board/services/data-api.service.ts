import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Offer, Characteristic, Price } from '../types';

@Injectable({
  providedIn: 'root',
})
export class DataApiService {
  constructor(private http: HttpClient) {}

  getOfferts() {
    return this.http
      .get<Offer[]>('assets/ofertas.json')
      .pipe(map((raw: []) => raw.map(this.parseOffer)));
  }

  parseOffer(rawOffer: any): Offer {
    const version = rawOffer.versions[0];

    const characteristics: Characteristic[] =
      version.characteristics?.map((characteristic) => {
        const characteristicVersion = characteristic.versions[0];

        return <Characteristic>{
          id: characteristic.id,
          versionId: characteristicVersion.id,
          name: characteristicVersion.name,
        };
      }) ?? [];

    const productOfferingPrices: Price[] =
      version.productOfferingPrices?.map((price) => {
        const priceVersion = price.versions[0];

        return <Price>{
          name: priceVersion.name,
          amount: priceVersion.price.amount,
          units: priceVersion.price.units.code,
        };
      }) ?? [];

    return {
      id: rawOffer.id,
      versionId: version.id,
      name: version.name,
      characteristics,
      productOfferingPrices,
    };
  }
}
