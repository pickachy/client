import { NgModule } from '@angular/core';
import { HomePageComponent } from './home-page/home-page.component';
import { LoansInAdvancePageComponent } from './loans/in-advance/loans-in-advance-page.component';
import { ServicesComponent } from './home-page/sections/services/services.component';
import { ServiceItemComponent } from './home-page/sections/services/service-item/service-item.component';

@NgModule({
  declarations: [HomePageComponent, ServicesComponent, ServiceItemComponent, LoansInAdvancePageComponent],
  exports: [HomePageComponent, LoansInAdvancePageComponent]
})
export class PagesModule {}
