import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PagesService } from '@core/services/pages.service';
import { Article } from '@core/models/article.model';

@Component({
  selector: 'app-page-articles',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];
  constructor(private _pagesService: PagesService) {}

  ngOnInit(): void {
    this._pagesService.getArticlesPageAggregation().subscribe(data => {
      this.articles = data.articles;
      this._pagesService.setSeoAndOg(data.page);
    });
  }

  articleTrackBy(_: number, article: Article) {
    return article.id;
  }
}
