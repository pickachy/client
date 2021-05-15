import { Component } from '@angular/core';
import { TagFilter } from '@shared/filters/tags-filter/tags-filter.component';
import { ArticlesService } from '@shared/services/articles.service';
import { Article } from '@models/article.model';

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
  articles: Article[];
  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.getArticles();
  }
}
