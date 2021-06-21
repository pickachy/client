import { NgModule } from '@angular/core';
import { LoansInAdvancePageComponent } from './loans/in-advance/loans-in-advance-page.component';
import { SharedModule } from '@shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansListComponent } from './loans/in-advance/sections/loans-list/loans-list.component';
import { LoanInAdvanceSinglePageComponent } from './loans/in-advance/loan-single/loan-in-advance-single-page.component';
import { RouterModule } from '@angular/router';
import { CalculatorComponent } from './loans/in-advance/loan-single/sections/calculator/calculator.component';

@NgModule({
  declarations: [
    LoansInAdvancePageComponent,
    LoansListComponent,
    LoanInAdvanceSinglePageComponent,
    CalculatorComponent
  ],
  exports: [LoansInAdvancePageComponent, LoanInAdvanceSinglePageComponent],
  imports: [SharedModule, CommonModule, FormsModule, FormsModule, RouterModule, FormsModule, ReactiveFormsModule],
  providers: []
})
export class PagesModule {}
