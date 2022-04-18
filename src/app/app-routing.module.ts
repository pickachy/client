import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansModule } from './features/loans/loans.module';
import { NavigationRoute } from '@core/models/navigation-route.model';

const routes: NavigationRoute[] = [
  {
    name: 'МФО',
    path: '',
    loadChildren: () => LoansModule
  },
  {
    name: 'Статьи',
    path: 'news',
    loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule)
  },
  {
    path: '**',
    loadChildren: () => import('./features/notfound/notfound.module').then(m => m.NotFoundModule)
  }
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
