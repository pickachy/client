import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { LoansInAdvancePageComponent } from './loans/in-advance/loans-in-advance-page.component';

@NgModule({
  declarations: [HomePageComponent, LoansInAdvancePageComponent],
  exports: [HomePageComponent, LoansInAdvancePageComponent]
})
export class PagesModule {}
