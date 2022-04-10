import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
  ArticleSinglePageData,
  ArticlesPageData,
  GQLArticleSinglePageDataPayload,
  GQLArticlesPageDataPayload,
  GQLHomePageDataPayload,
  GQLSingleLoanInAdvancePageDataPayload
} from '@models/page.model';
import { LoanProviderType } from '@models/loan.model';
import { Meta, Title } from '@angular/platform-browser';
import { Seo } from '@models/seo.model';
import { Article } from '@models/article.model';

const GET_HOME_PAGE_DATA = gql`
  query {
    seo(where: { url: { eq: "/" } }) {
      title
      keywords
      description
    }
    loans {
      providerTypeId
      providerImageExtension
      providerName
      referralLink
      amountFrom
      amountTo
      initialDayRate
      dayRate
      processingTimeMinutes
      termDays
    }
  }
`;

const GET_LOAN_IN_ADVANCE_SINGLE_PAGE_DATA = gql`
  query GetSingleLoanPageData($loanProviderId: Int!) {
    seo(where: { url: { eq: "loans/mfo/$" } }) {
      title
      keywords
      description
    }
    loan(where: { providerTypeId: { eq: $loanProviderId } }) {
      providerTypeId
      providerImageExtension
      providerName
      referralLink
      amountFrom
      amountTo
      bonusesDescription
      borrowerAgeFrom
      borrowerAgeTo
      commissionDescription
      dayRate
      extraInfo
      initialDayRate
      isOnlineProcessing
      issueWorkingHoursDescription
      processingTimeMinutes
      repaymentMethodsDescription
      termDays
      withdrawalMethodsDescription
      receiversDescription
    }
  }
`;

const GET_ARTICLES_PAGE_DATA = gql`
  query {
    articles {
      id
      title
      publicationDate
    }
    seo(where: { url: { eq: "news" } }) {
      title
      keywords
      description
    }
  }
`;

const GET_ARTICLE_SINGLE_PAGE_DATA = gql`
  query GetArticleSinglePageData($id: Int!){
    article(where: { id: { eq: $id } }) {
      id
      title
      htmlBody
      publicationDate
    }
    seo(where: { url: { eq: "news/$id" } }) {
      title
      keywords
      description
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private apollo: Apollo, private title: Title, private meta: Meta) {}

  public getArticlesPageAggregation(): Observable<ArticlesPageData> {
    return this.apollo
      .query<GQLArticlesPageDataPayload>({ query: GET_ARTICLES_PAGE_DATA })
      .pipe(map(result => ({ seo: result.data.seo, articles: Article.convertArticles(result.data.articles) })));
  }

  public getSingleArticlePageAggregation(id: number): Observable<ArticleSinglePageData> {
    return this.apollo
      .query<GQLArticleSinglePageDataPayload>({ query: GET_ARTICLE_SINGLE_PAGE_DATA, variables: {id} })
      .pipe(map(result => ({ seo: result.data.seo, article: Article.convertArticle(result.data.article) })));
  }

  public getHomePageAggregation(): Observable<GQLHomePageDataPayload> {
    return this.apollo.query<GQLHomePageDataPayload>({ query: GET_HOME_PAGE_DATA }).pipe(map(result => result.data));
  }

  public getSingleLoanInAdvancePageAggregation(loanProviderId: LoanProviderType): Observable<GQLSingleLoanInAdvancePageDataPayload> {
    return this.apollo
      .query<GQLSingleLoanInAdvancePageDataPayload>({ query: GET_LOAN_IN_ADVANCE_SINGLE_PAGE_DATA, variables: { loanProviderId } })
      .pipe(map(result => result.data));
  }

  public setSeoAndOg(seo: Seo) {
    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ name: 'keywords', content: seo.keywords });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
  }
}
