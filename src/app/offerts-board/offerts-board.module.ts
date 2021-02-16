import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { OfferComponent } from './components/offer/offer.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PricesComponent } from './components/prices/prices.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import * as fromState from './state/offerts.reducer';
import { OffertsEffects } from './state/offerts.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    StoreModule.forFeature(fromState.FEATURE_KEY, fromState.reducer),
    EffectsModule.forFeature([OffertsEffects]),
  ],
})
export class OffertsBoardModule {}
