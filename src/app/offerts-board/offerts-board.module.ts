import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './offer/offer.component';
import { CharacteristicsComponent } from './characteristics/characteristics.component';
import { PricesComponent } from './prices/prices.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    OfferComponent,
    CharacteristicsComponent,
    PricesComponent,
    DashboardComponent,
  ],
  imports: [CommonModule],
})
export class OffertsBoardModule {}
