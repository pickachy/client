import { GQLLoanPayload } from './loan.model';
import { Article, GQLArticlePayload } from './article.model';

export interface GQLPagePayload {
  urlSlug: string;
  title: string;
  description: string;
  keywords: string;
}

export interface Page extends GQLPagePayload {}


export interface GQLPageDataPayload {
  page: GQLPagePayload;
}

export interface PageDataPayload {
  page: Page;
}

export interface GQLHomePageDataPayload extends GQLPageDataPayload {
  loans: GQLLoanPayload[];
}

export interface GQLSingleLoanInAdvancePageDataPayload {
  loan: GQLLoanPayload;
}

export interface GQLArticlesPageDataPayload extends GQLPageDataPayload {
  articles: GQLArticlePayload[];
}

export interface GQLArticleSinglePageDataPayload {
  article: GQLArticlePayload;
}

export interface ArticlesPageData extends PageDataPayload {
  articles: Article[];
}

export interface ArticleSinglePageData {
  article: Article;
  page: Page;
}
