import { Component } from '@angular/core';
import { ArticleItemView, UsefulArticlesService } from '../../../shared/sections/useful-articles/useful-articles.service';
import { TagFilter } from '../../../shared/filters/tags-filter/tags-filter.component';
import { SortingFilter } from './sections/sorting-filter/sorting-filter.component';

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
  articles: ArticleItemView[];
  constructor(private articlesService: UsefulArticlesService) {
    this.articles = articlesService.getArticles();
  }
}
