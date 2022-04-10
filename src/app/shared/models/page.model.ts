import { GQLSeoPayload, Seo } from '@models/seo.model';
import { GQLLoanPayload } from '@models/loan.model';
import { Article, GQLArticlePayload } from '@models/article.model';

interface GQLPageDataPayload {
  seo: GQLSeoPayload;
}

interface PageDataPayload {
  seo: Seo;
}

export interface GQLHomePageDataPayload extends GQLPageDataPayload {
  loans: GQLLoanPayload[];
}

export interface GQLSingleLoanInAdvancePageDataPayload extends GQLPageDataPayload {
  loan: GQLLoanPayload;
}

export interface GQLArticlesPageDataPayload extends GQLPageDataPayload {
  articles: GQLArticlePayload[];
}

export interface GQLArticleSinglePageDataPayload extends GQLPageDataPayload {
  article: GQLArticlePayload;
}

export interface ArticlesPageData extends PageDataPayload{
  articles: Article[];
}

export interface ArticleSinglePageData extends PageDataPayload{
  article: Article;
}
