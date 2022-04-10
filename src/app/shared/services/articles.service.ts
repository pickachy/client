import { Injectable } from '@angular/core';
import {
  Article,
  GQLArticlesPayload,
  GQLGetArticleByIdDtoPayload
} from '@models/article.model';
import { Apollo, gql } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const GET_ARTICLES = gql`
  query {
    articles {
      id
      title
      htmlBody
      publicationDate
    }
  }
`;

const GET_ARTICLE_BY_ID = gql`
  query GetArticleById($id: Int!) {
    article(where: { id: { eq: $id } }) {
      id
      title
      htmlBody
      publicationDate
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private readonly _articles = new BehaviorSubject<Article[]>([]);

  private readonly _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  constructor(private _apollo: Apollo) {}

  getArticles(): Observable<Article[]> {
    this._loading.next(true);
    this._apollo
      .query<GQLArticlesPayload>({ query: GET_ARTICLES })
      .pipe(
        map(result => {
          const articles = Article.convertArticles(result.data.articles);
          this._articles.next(articles);
          this._loading.next(false);
          return articles;
        })
      )
      .subscribe();
    return this._articles.asObservable();
  }

  getArticleById(id: number): Observable<Article> {
    this._loading.next(true);
    return this._apollo.query<GQLGetArticleByIdDtoPayload>({ query: GET_ARTICLE_BY_ID, variables: { id } }).pipe(
      map(result => {
        const article = Article.convertArticle(result.data.article);
        const existedArticle = this._articles.value.findIndex(article => article.id === article.id);
        if (!existedArticle) {
          const newArticles = this._articles.value;
          newArticles.push(article);
          this._articles.next(newArticles);
          this._loading.next(false);
        }
        return article;
      })
    );
  }
}
