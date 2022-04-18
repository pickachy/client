import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArticlesPageComponent } from './pages/articles/articles-page.component';
import { SingleArticlePageComponent } from './pages/single-article/single-article-page.component';
import { NavigationRoute } from '@core/models/navigation-route.model';

const routes: NavigationRoute[] = [
  {
    name: 'Статьи',
    path: '',
    component: ArticlesPageComponent
  },
  {
    path: ':id',
    component: SingleArticlePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesRoutingModule {}
