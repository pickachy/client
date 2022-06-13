import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';
import {
  ArticleSinglePageData,
  ArticlesPageData,
  BrokersPageData,
  GQLArticleSinglePageDataPayload,
  GQLArticlesPageDataPayload,
  GQLBrokersPageDataPayload,
  GQLHomePageDataPayload,
  GQLSingleLoanInAdvancePageDataPayload,
  Page
} from '@core/models/page.model';
import { LoanProviderType } from '@core/models/loan.model';
import { Article } from '@core/models/article.model';
import { isBrowser } from '@shared/tools';
import { BrokerFilterDto } from '@core/models/broker.model';

const GET_HOME_PAGE_DATA = gql`
  query {
    page(where: { urlSlug: { eq: "/" } }) {
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
      page {
        urlSlug
        title
        keywords
        description
      }
    }
  }
`;

const GET_ARTICLES_PAGE_DATA = gql`
  query {
    articles {
      id
      title
      publicationDate
      page {
        urlSlug
      }
    }
    page(where: { urlSlug: { eq: "news" } }) {
      title
      keywords
      description
    }
  }
`;

const GET_ARTICLE_SINGLE_PAGE_DATA = gql`
  query GetArticleSinglePageData($urlSlug: String!) {
    article(where: { page: { urlSlug: { eq: $urlSlug } } }) {
      id
      title
      htmlBody
      publicationDate
      page {
        title
        keywords
        description
      }
    }
  }
`;

const GET_BROKERS_PAGE_DATA = gql`
  query GetBrokers($where: BrokerFilterInput, $order: [BrokerSortInput!]) {
    brokers(where: $where, order: $order) {
      id
      url
      imageRelativeUrl
      creationYear
      creationYearHint
      initialSpread
      initialSpreadHint
      clientsAmount
      clientsAmountHint
      minimalDeposit
      minimalDepositCurrency
      minimalDepositHint
      country
      stockCommissionDescription
      stockCommissionDescriptionHint
      pricePerMonthDescription
      pricePerMonthDescriptionHint
      minimalDealCommission
      minimalDealCommissionCurrency
      minimalDealCommissionHint
      googlePlayMarketRating
      appleMarketRating
      autoFollow
      ipoParticipant
      freeService
      freeAccountCreation
      documents
      documentsHint
      ipoParticipationPossibility
      ipoParticipationPossibilityHint
      ipoParticipationCommission
      ipoParticipationCommissionHint
      authorizedCapitalDescription
      authorizedCapitalDescriptionHint
      ownCapitalDescription
      ownCapitalDescriptionHint
      accountRegistrationPrice
      accountRegistrationPriceHint
      replenishmentCommission
      replenishmentCommissionHint
      withdrawalCommission
      withdrawalCommissionHint
      withdrawalReplenishmentMethods
      withdrawalReplenishmentMethodsHint
      ipoParticipationMinimalAmount
      ipoParticipationMinimalAmountHint
      creditLeverage
      creditLeverageHint
      officialCountries
      officialCountriesHint
      instrumentsDescription
      instrumentsDescriptionHint
      tariffs {
        id,
        name
        stockCommissionDescription
        stockCommissionDescriptionHint
        minimalCommissionDescription
        minimalCommissionDescriptionHint
        pricePerMonthDescription
        pricePerMonthDescriptionHint
      }
      features {
        id,
        name
        type
      }
    }
    page(where: { urlSlug: { eq: "brokers" } }) {
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

  public getBrokersPageAggregation(filter: BrokerFilterDto): Observable<BrokersPageData> {
    return this.apollo
      .query<GQLBrokersPageDataPayload>({ query: GET_BROKERS_PAGE_DATA, variables: { where: filter.filter, order: filter.order } })
      .pipe(map(result => ({ page: result.data.page, brokers: result.data.brokers })));
  }

  public getArticlesPageAggregation(): Observable<ArticlesPageData> {
    return this.apollo
      .query<GQLArticlesPageDataPayload>({ query: GET_ARTICLES_PAGE_DATA })
      .pipe(map(result => ({ page: result.data.page, articles: Article.convertArticles(result.data.articles) })));
  }

  public getSingleArticlePageAggregation(urlSlug: string): Observable<ArticleSinglePageData> {
    return this.apollo
      .query<GQLArticleSinglePageDataPayload>({ query: GET_ARTICLE_SINGLE_PAGE_DATA, variables: { urlSlug } })
      .pipe(map(result => ({ page: result.data.article.page, article: Article.convertArticle(result.data.article) })));
  }

  public getHomePageAggregation(): Observable<GQLHomePageDataPayload> {
    return this.apollo.query<GQLHomePageDataPayload>({ query: GET_HOME_PAGE_DATA }).pipe(map(result => result.data));
  }

  public getSingleLoanInAdvancePageAggregation(loanProviderId: LoanProviderType): Observable<GQLSingleLoanInAdvancePageDataPayload> {
    return this.apollo
      .query<GQLSingleLoanInAdvancePageDataPayload>({ query: GET_LOAN_IN_ADVANCE_SINGLE_PAGE_DATA, variables: { loanProviderId } })
      .pipe(map(result => result.data));
  }

  public setSeoAndOg(page: Page) {
    this.title.setTitle(page.title);
    this.meta.updateTag({ name: 'description', content: page.description });
    this.meta.updateTag({ name: 'keywords', content: page.keywords });
    this.meta.updateTag({ property: 'og:description', content: page.description });
    this.meta.updateTag({ property: 'og:title', content: page.title });
    this.meta.updateTag({ property: 'og:url', content: isBrowser ? window.location.href : '' });
  }
}
