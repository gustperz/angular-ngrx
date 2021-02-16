import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './components/offer/offer.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PricesComponent } from './components/prices/prices.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StoreModule } from '@ngrx/store';
import * as fromState from './state/offerts.reducer';

@NgModule({
  declarations: [
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromState.FEATURE_KEY, fromState.reducer),
  ],
})
export class OffertsBoardModule {}
