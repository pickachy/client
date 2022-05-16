import { getDateTimeString } from '@shared/tools';
import { GQLPagePayload, Page } from '@core/models/page.model';

export interface GQLArticlePayload {
  id: number;
  title: string;
  htmlBody: string;
  publicationDate: string;
  page: GQLPagePayload;
}

export interface GQLGetArticleByIdDtoPayload {
  article: GQLArticlePayload;
}

export interface GQLArticlesPayload {
  articles: GQLArticlePayload[];
}

export class Article {
  constructor(
    public id:number,
    public title: string,
    public htmlBody: string,
    public publicationDate: Date,
    public publicationDateString: string,
    public page: Page
  ) {
  }

  public static convertArticle(payload: GQLArticlePayload): Article{
    const publicationDate = new Date(payload.publicationDate);
    console.log(payload.page);
    return new Article(
      payload.id,
      payload.title,
      payload.htmlBody,
      publicationDate,
      getDateTimeString(publicationDate),
      payload.page
    );
  }

  public static convertArticles(payload: GQLArticlePayload[]): Article[]{
    return payload.map(this.convertArticle);
  };
}
