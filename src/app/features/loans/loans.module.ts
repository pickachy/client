import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoansInAdvancePageComponent } from './pages/loans-in-advance/loans-in-advance-page.component';
import { LoansListComponent } from './pages/loans-in-advance/components/sections/loans-list/loans-list.component';
import { LoansRoutingModule } from './loans-routing.module';
import {
  LoanInAdvanceSinglePageComponent
} from './pages/loans-in-advance-single/loan-in-advance-single-page.component';
import { CalculatorComponent } from './pages/loans-in-advance-single/sections/calculator/calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [LoansInAdvancePageComponent, LoanInAdvanceSinglePageComponent, LoansListComponent, CalculatorComponent],
  exports: [LoansInAdvancePageComponent, LoanInAdvanceSinglePageComponent],
  imports: [CommonModule, SharedModule, LoansRoutingModule, FormsModule, ReactiveFormsModule]
})
export class LoansModule {}
