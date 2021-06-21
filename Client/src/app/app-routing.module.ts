import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansInAdvancePageComponent } from './pages/loans/in-advance/loans-in-advance-page.component';
import { PageNotFoundComponent } from '@shared/pages/page-not-found.component';
import { NavigationRoute } from '@models/navigation-route.model';
import { LoanInAdvanceSinglePageComponent } from './pages/loans/in-advance/loan-single/loan-in-advance-single-page.component';

const routes: NavigationRoute[] = [
  { path: '', component: LoansInAdvancePageComponent },
  {
    path: 'loans/mfo/:id',
    component: LoanInAdvanceSinglePageComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
