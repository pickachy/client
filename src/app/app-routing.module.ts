import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoansModule } from './features/loans/loans.module';
import { NavigationRoute } from '@core/models/navigation-route.model';
import { ArticlesModule } from './features/articles/articles.module';
import { NotFoundModule } from './features/notfound/notfound.module';
import { BrokersModule } from './features/brokers/brokers.module';

const routes: NavigationRoute[] = [
  {
    name: 'МФО',
    path: '',
    loadChildren: () => LoansModule
  },
  {
    name: 'Статьи',
    path: 'news',
    loadChildren: () => ArticlesModule
  },
  {
    name: 'Брокеры',
    path: 'brokers',
    loadChildren: () => BrokersModule
  },
  {
    path: '**',
    loadChildren: () => NotFoundModule
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabledBlocking'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
