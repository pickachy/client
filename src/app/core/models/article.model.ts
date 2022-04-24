import { getDateTimeString } from '@shared/tools';

export interface GQLArticlePayload {
  id: number;
  title: string;
  htmlBody: string;
  publicationDate: string;
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
    public publicationDateString: string
  ) {
  }

  public static convertArticle(payload: GQLArticlePayload): Article{
    const publicationDate = new Date(payload.publicationDate);
    return new Article(
      payload.id,
      payload.title,
      payload.htmlBody,
      publicationDate,
      getDateTimeString(publicationDate)
    );
  }

  public static convertArticles(payload: GQLArticlePayload[]): Article[]{
    return payload.map(payload => {
      const publicationDate = new Date(payload.publicationDate);
      return new Article(
        payload.id,
        payload.title,
        payload.htmlBody,
        publicationDate,
        getDateTimeString(publicationDate)
      );
    });
  };


}
