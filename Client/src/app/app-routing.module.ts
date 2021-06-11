import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansInAdvancePageComponent } from './pages/loans/in-advance/loans-in-advance-page.component';
import { PageNotFoundComponent } from '@shared/pages/page-not-found.component';
import { NavigationRoute } from '@models/navigation-route.model';
import { LoanInAdvanceSinglePageComponent } from './pages/loans/in-advance/loan-single/loan-in-advance-single-page.component';

// const routes: NavigationRoute[] = [
//   { path: '', component: HomePageComponent },
//   {
//     path: 'loans',
//     children: [
//       {
//         path: 'in-advance',
//         component: LoansInAdvancePageComponent,
//         name: 'Кредиты'
//       },
//       {
//         path: 'in-advance/:id',
//         component: LoanInAdvanceSinglePageComponent
//       }
//     ]
//   },
//   { path: 'mortgage', component: HomePageComponent, name: 'Ипотека' },
//   { path: 'investments', component: HomePageComponent, name: 'Инвестиции' },
//   { path: 'news', component: HomePageComponent, name: 'Новости' },
//   { path: 'news', component: HomePageComponent, name: 'О проекте', isAdditional: true },
//   { path: 'news', component: HomePageComponent, name: 'Контакты', isAdditional: true },
//   { path: 'news', component: HomePageComponent, name: 'Партнерская программа', isAdditional: true },
//   { path: 'news', component: HomePageComponent, name: 'Политика конфиденциальности', isAdditional: true },
//   { path: '**', component: PageNotFoundComponent }
// ];

const routes: NavigationRoute[] = [
  { path: '', component: LoansInAdvancePageComponent },
  {
    path: 'loans/in-advance/:id',
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
