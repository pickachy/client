import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '@shared/services/articles.service';
import { Article } from '@models/article.model';

@Component({
  selector: 'app-page-articles',
  templateUrl: './articles-page.component.html',
  styleUrls: ['./articles-page.component.scss']
})
export class ArticlesPageComponent implements OnInit {
  articles: Article[] = [];

  constructor(private _articlesService: ArticlesService) {}

  ngOnInit(): void {
    this._articlesService.getArticles().subscribe(articles => {
      this.articles = articles;
    });
  }
}
