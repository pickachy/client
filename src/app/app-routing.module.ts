import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansInAdvancePageComponent } from './pages/loans/in-advance/loans-in-advance-page.component';
import { PageNotFoundComponent } from '@shared/pages/page-not-found.component';
import { NavigationRoute } from '@models/navigation-route.model';
import { LoanInAdvanceSinglePageComponent } from './pages/loans/in-advance/loan-single/loan-in-advance-single-page.component';
import { SingleArticlePageComponent } from './pages/single-news/single-article-page.component';
import { ArticlesPageComponent } from './pages/articles/articles-page.component';

const routes: NavigationRoute[] = [
  {
    name: 'МФО',
    path: '',
    component: LoansInAdvancePageComponent
  },
  {
    path: 'loans/mfo/:id',
    component: LoanInAdvanceSinglePageComponent
  },
  {
    name: 'Статьи',
    path: 'news',
    component: ArticlesPageComponent
  },
  {
    path: 'news/:id',
    component: SingleArticlePageComponent
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
