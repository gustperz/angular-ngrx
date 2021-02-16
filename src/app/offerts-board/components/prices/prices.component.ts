import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { OffertsPartialState } from '../../state/offerts.reducer';
import { Price } from '../../types';
import * as Selectors from '../../state/offerts.selectors';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {
  prices: Price[] = [];

  constructor(private store: Store<OffertsPartialState>) {}

  ngOnInit(): void {
    this.store.pipe(select(Selectors.getCurrentOffert)).subscribe((offert) => {
      this.prices = offert?.productOfferingPrices ?? [];
    });
  }
}
