import { Component } from '@angular/core';
import { Filter } from '../../shared/filters/section-filter/section-filter.component';
import { ArticleItemView, UsefulArticlesService } from '../../shared/sections/useful-articles/useful-articles.service';

@Component({
  selector: 'app-page-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  filter: Filter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: () => null
  };
  articles: ArticleItemView[];
  constructor(private articlesService: UsefulArticlesService) {
    this.articles = articlesService.getArticles();
  }
}
