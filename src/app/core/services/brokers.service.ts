import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Broker, BrokerFilterDto, GQLBrokersPayload } from '@core/models/broker.model';

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
export class BrokersService {
  constructor(private apollo: Apollo) {}

  public getBrokers(filter: BrokerFilterDto): Observable<Broker[]> {
    return this.apollo
      .query<GQLBrokersPayload>({ query: GET_BROKERS_PAGE_DATA, variables: { where: filter.filter, order: filter.order } })
      .pipe(map(result => result.data.brokers));
  }
}
