import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansInAdvancePageComponent } from './pages/loans-in-advance/loans-in-advance-page.component';
import { LoanInAdvanceSinglePageComponent } from './pages/loans-in-advance-single/loan-in-advance-single-page.component';
import { NavigationRoute } from '@core/models/navigation-route.model';

const routes: NavigationRoute[] = [
  {
    name: 'МФО',
    path: '',
    component: LoansInAdvancePageComponent
  },
  {
    path: 'loans/mfo/:id',
    component: LoanInAdvanceSinglePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoansRoutingModule {}
