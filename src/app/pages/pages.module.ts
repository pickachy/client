import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { LoansInAdvancePageComponent } from './loans/in-advance/loans-in-advance-page.component';
import { ServicesComponent } from './home-page/sections/services/services.component';
import { ServiceItemComponent } from './home-page/sections/services/service-item/service-item.component';
import { BestDealsComponent } from './home-page/sections/best-deals/best-deals.component';
import { SharedModule } from '../shared/shared.module';
import { BestDealsService } from './home-page/sections/best-deals/best-deals.service';
import { CommonModule } from '@angular/common';
import { BestDealsItemComponent } from './home-page/sections/best-deals/best-deals-list/best-deals-item/best-deals-item.component';
import { BestDealsListComponent } from './home-page/sections/best-deals/best-deals-list/best-deals-list.component';
import { ExchangeRatesComponent } from './home-page/sections/exchange-rates/exchange-rates.component';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PartnersComponent } from './home-page/sections/partners/partners.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ServicesComponent,
    ServiceItemComponent,
    BestDealsComponent,
    BestDealsItemComponent,
    BestDealsListComponent,
    ExchangeRatesComponent,
    PartnersComponent,
    LoansInAdvancePageComponent
  ],
  exports: [HomePageComponent, LoansInAdvancePageComponent],
  imports: [SharedModule, CommonModule, FormsModule, NgSelectModule, FormsModule],
  providers: [BestDealsService]
})
export class PagesModule {}
