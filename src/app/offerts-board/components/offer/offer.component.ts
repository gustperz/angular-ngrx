import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { OffertsPartialState } from '../../state/offerts.reducer';
import { Offer } from '../../types';
import * as Selectors from '../../state/offerts.selectors';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss'],
})
export class OfferComponent implements OnInit {
  offert: Offer;

  constructor(private store: Store<OffertsPartialState>) {}

  ngOnInit(): void {
    this.store.pipe(select(Selectors.getCurrentOffert)).subscribe((offert) => {
      this.offert = offert;
    });
  }
}
