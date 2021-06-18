import { Component, OnDestroy, OnInit } from '@angular/core';
import { PagesService } from '@shared/services/pages.service';
import { Subscription } from 'rxjs';
import { HomePageAggregation } from '@models/page.model';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-page-loans-in-advance',
  templateUrl: './loans-in-advance-page.component.html',
  styleUrls: ['./loans-in-advance-page.component.scss']
})
export class LoansInAdvancePageComponent implements OnInit, OnDestroy {
  // loansTagFilter: TagFilter = {
  //   items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
  //   onClick: () => null
  // };
  // articlesTagFilter: TagFilter = {
  //   items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
  //   onClick: () => null
  // };
  // sortingFilter: SortingFilter = {
  //   items: ['по популярности', 'по сумме', 'по сроку', 'по ставке', 'по времени принятия решения', 'без сортировки'],
  //   onClick: () => null
  // };
  // articles: Article[];
  private querySubscription?: Subscription;
  pageAggregation?: HomePageAggregation;

  constructor(/*private articlesService: ArticlesService, */ private title: Title, private meta: Meta, private pageService: PagesService) {
    // this.articles = articlesService.getArticles();
  }

  ngOnInit(): void {
    this.querySubscription = this.pageService.getHomePageAggregation().subscribe(data => {
      this.pageAggregation = data;
      this.title.setTitle(data.seo.title);
      this.meta.addTags([
        { name: 'title', content: data.seo.title },
        { name: 'description', content: data.seo.description }
      ]);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
