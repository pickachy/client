import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {PageNotFoundComponent} from "./common/pages/page-not-found.component";
import {LoansInAdvancePageComponent} from "./pages/loans/in-advance/loans-in-advance-page.component";

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'loans', children:
      [
        {path: 'in-advance', component: LoansInAdvancePageComponent}
      ]
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled',
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
