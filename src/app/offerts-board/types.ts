export interface Price {
  amount: number;
  units: string;
  name: string;
}

export interface Characteristic {
  name: string;
  versionId: string;
  id: string;
}

export interface Offer {
  characteristics: Characteristic[];
  productOfferingPrices: Price[];
  name: string;
  versionId: string;
  id: string;
}
