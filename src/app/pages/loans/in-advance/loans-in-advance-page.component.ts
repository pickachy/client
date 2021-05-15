import { Component } from '@angular/core';
import { TagFilter } from '@shared/filters/tags-filter/tags-filter.component';
import { SortingFilter } from './sections/sorting-filter/sorting-filter.component';
import { Article } from '@models/article.model';
import { ArticlesService } from '@shared/services/articles.service';

@Component({
  selector: 'app-page-loans-in-advance',
  templateUrl: './loans-in-advance-page.component.html',
  styleUrls: ['./loans-in-advance-page.component.scss']
})
export class LoansInAdvancePageComponent {
  loansTagFilter: TagFilter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: () => null
  };
  articlesTagFilter: TagFilter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: () => null
  };
  sortingFilter: SortingFilter = {
    items: ['по популярности', 'по сумме', 'по сроку', 'по ставке', 'по времени принятия решения', 'без сортировки'],
    onClick: () => null
  };
  articles: Article[];
  constructor(private articlesService: ArticlesService) {
    this.articles = articlesService.getArticles();
  }
}
