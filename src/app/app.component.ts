import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { OffertsPartialState } from './offerts-board/state/offerts.reducer';

import * as Actions from './offerts-board/state/offerts.actions';
import * as Selectors from './offerts-board/state/offerts.selectors';
import { Offer } from './offerts-board/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  offerts: Offer[] = [];

  constructor(private store: Store<OffertsPartialState>) {}

  ngOnInit(): void {
    this.store.dispatch(Actions.load());

    this.store.pipe(select(Selectors.getOfferts)).subscribe((offerts) => {
      this.offerts = offerts;
    });
  }

  selectOffert(id: string) {
    console.log(id)
    this.store.dispatch(Actions.setCurrentOffer({ offerId: id }));
  }
}
