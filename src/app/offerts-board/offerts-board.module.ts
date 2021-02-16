import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfferComponent } from './components/offer/offer.component';
import { CharacteristicsComponent } from './components/characteristics/characteristics.component';
import { PricesComponent } from './components/prices/prices.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

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
