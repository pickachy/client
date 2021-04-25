import { Component } from '@angular/core';
import { ArticleItemView, UsefulArticlesService } from '../../shared/sections/useful-articles/useful-articles.service';
import { TagFilter } from '../../shared/filters/tags-filter/tags-filter.component';

@Component({
  selector: 'app-page-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  filter: TagFilter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: () => null
  };
  articles: ArticleItemView[];
  constructor(private articlesService: UsefulArticlesService) {
    this.articles = articlesService.getArticles();
  }
}
