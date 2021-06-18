import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { LoansInAdvancePageComponent } from './loans/in-advance/loans-in-advance-page.component';
import { ServicesComponent } from './home-page/sections/services/services.component';
import { ServiceItemComponent } from './home-page/sections/services/service-item/service-item.component';
import { BestDealsComponent } from './home-page/sections/best-deals/best-deals.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { BestDealsItemComponent } from './home-page/sections/best-deals/best-deals-list/best-deals-item/best-deals-item.component';
import { BestDealsListComponent } from './home-page/sections/best-deals/best-deals-list/best-deals-list.component';
import { ExchangeRatesComponent } from './home-page/sections/exchange-rates/exchange-rates.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { PartnersComponent } from './home-page/sections/partners/partners.component';
import { QasComponent } from './home-page/sections/qas/qas.component';
import { QasListComponent } from './home-page/sections/qas/qas-list/qas-list.component';
import { SortingFilterComponent } from './loans/in-advance/sections/sorting-filter/sorting-filter.component';
import { LoansListComponent } from './loans/in-advance/sections/loans-list/loans-list.component';
import { LoansService } from '@shared/services/loans.service';
import { LoanInAdvanceSinglePageComponent } from './loans/in-advance/loan-single/loan-in-advance-single-page.component';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './loans/in-advance/loan-single/sections/calculator/calculator.component';

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
    QasComponent,
    QasListComponent,
    LoansInAdvancePageComponent,
    SortingFilterComponent,
    LoansListComponent,
    LoanInAdvanceSinglePageComponent,
    CalculatorComponent
  ],
  exports: [HomePageComponent, LoansInAdvancePageComponent, LoanInAdvanceSinglePageComponent],
  imports: [SharedModule, CommonModule, FormsModule, NgSelectModule, FormsModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: [LoansService]
})
export class PagesModule {}
