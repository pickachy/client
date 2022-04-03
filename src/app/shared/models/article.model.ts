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
    public publicationDate: Date
  ) {
  }

  public static convertArticle(payload: GQLArticlePayload): Article{
    return new Article(
      payload.id,
      payload.title,
      payload.htmlBody,
      new Date(payload.publicationDate)
    );
  }

  public static convertArticles(payload: GQLArticlePayload[]): Article[]{
    return payload.map(payload => new Article(
      payload.id,
      payload.title,
      payload.htmlBody,
      new Date(payload.publicationDate)
    ));
  }


}
