import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';

import { OffertsPartialState } from '../../state/offerts.reducer';
import { Characteristic } from '../../types';
import * as Selectors from '../../state/offerts.selectors';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss'],
})
export class CharacteristicsComponent implements OnInit {
  characteristics: Characteristic[] = [];

  constructor(private store: Store<OffertsPartialState>) {}

  ngOnInit(): void {
    this.store.pipe(select(Selectors.getCurrentOffert)).subscribe((offert) => {
      this.characteristics = offert?.characteristics ?? [];
    });
  }
}
