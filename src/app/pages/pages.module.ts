import { NgModule } from '@angular/core';
import { LoansInAdvancePageComponent } from './loans/in-advance/loans-in-advance-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansListComponent } from './loans/in-advance/sections/loans-list/loans-list.component';
import { LoanInAdvanceSinglePageComponent } from './loans/in-advance/loan-single/loan-in-advance-single-page.component';
import { CalculatorComponent } from './loans/in-advance/loan-single/sections/calculator/calculator.component';
import { AppRoutingModule } from '../app-routing.module';
import { BrokersPageComponent } from './brokers-page/brokers-page.component';
import { ToolsComponent } from './brokers-page/section/details/tools/tools.component';
import { TariffComponent } from './brokers-page/section/details/tariff/tariff.component';
import { InformationComponent } from './brokers-page/section/details/information/information.component';
import { DetailsComponent } from './brokers-page/section/details/details.component';
import { TooltipComponent } from './brokers-page/section/tooltip/tooltip.component';
import { RatingStarsComponent } from './brokers-page/section/rating-stars/rating-stars.component';
import { ProsAndConstComponent } from './brokers-page/section/pros-and-cons/pros-and-cons.component';
import { BrokersListComponent } from './brokers-page/section/brokers-list/brokers-list.component';
import { BrokerItemComponent } from './brokers-page/section/brokers-list/broker-item/broker-item.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CheckboxControlComponent } from './brokers-page/controls/checkbox-control/checkbox-control.component';
import { InputControlComponent } from './brokers-page/controls/input-control/input-control.component';

@NgModule({
  declarations: [
    LoansInAdvancePageComponent,
    LoansListComponent,
    LoanInAdvanceSinglePageComponent,
    CalculatorComponent,
    BrokersPageComponent,
    DetailsComponent,
    ToolsComponent,
    TariffComponent,
    InformationComponent,
    TooltipComponent,
    RatingStarsComponent,
    ProsAndConstComponent,
    BrokersListComponent,
    BrokerItemComponent,
    InputControlComponent,
    CheckboxControlComponent
  ],
  exports: [LoansInAdvancePageComponent, LoanInAdvanceSinglePageComponent, BrokersPageComponent],
  imports: [CommonModule, FormsModule, AppRoutingModule, ReactiveFormsModule, NgSelectModule],
  providers: []
})
export class PagesModule {}
