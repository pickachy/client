import { Component, OnInit } from '@angular/core';
import { Article } from '@models/article.model';
import { getDateTimeString } from '@shared/tools/dateUtils';
import { PagesService } from '@shared/services/pages.service';

@Component({
  selector: 'app-page-articles',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];

  constructor(private _pagesService: PagesService) {}

  ngOnInit(): void {
    this._pagesService.getArticlesPageAggregation().subscribe(data => {
      this.articles = data.articles;
      this._pagesService.setSeoAndOg(data.seo);
    });
  }

  getDateTimeString(date: Date) {
    return getDateTimeString(date);
  }
}
