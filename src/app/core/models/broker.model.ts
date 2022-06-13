import {
  BooleanOperationFilterInput,
  ComparableDoubleOperationFilterInput,
  ComparableInt32OperationFilterInput,
  SortEnumType,
  StringOperationFilterInput
} from './filter.model';

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  UAH = 'UAH'
}

export enum BrokerFeatureType {
  Advantage = 'ADVANTAGE',
  Disadvantage = 'DISADVANTAGE'
}

export interface GQLBrokerFeaturePayload {
  id: number;
  name: string;
  type: BrokerFeatureType;
}

export interface GQLBrokerTariffPayload {
  id: number;
  name: string;
  stockCommissionDescription: string;
  stockCommissionDescriptionHint: string;
  minimalCommissionDescription: string;
  minimalCommissionDescriptionHint: string;
  pricePerMonthDescription: string;
  pricePerMonthDescriptionHint: string;
}

export interface GQLBrokerPayload {
  id: number;
  url: string;
  imageRelativeUrl: string;
  creationYear: number;
  creationYearHint: string;
  initialSpread: number;
  initialSpreadHint: string;
  clientsAmount: number;
  clientsAmountHint: string;
  minimalDeposit: number;
  minimalDepositCurrency: Currency;
  minimalDepositHint: string;
  country: string;
  stockCommissionDescription: string;
  stockCommissionDescriptionHint: string;
  pricePerMonthDescription: string;
  pricePerMonthDescriptionHint: string;
  minimalDealCommission: number;
  minimalDealCommissionCurrency: Currency;
  minimalDealCommissionHint: string;
  googlePlayMarketRating: number;
  appleMarketRating: number;
  autoFollow: boolean;
  ipoParticipant: boolean;
  freeService: boolean;
  freeAccountCreation: boolean;
  documents: string;
  documentsHint: string;
  ipoParticipationPossibility: string;
  ipoParticipationPossibilityHint: string;
  ipoParticipationCommission: string;
  ipoParticipationCommissionHint: string;
  authorizedCapitalDescription: string;
  authorizedCapitalDescriptionHint: string;
  ownCapitalDescription: string;
  ownCapitalDescriptionHint: string;
  accountRegistrationPrice: string;
  accountRegistrationPriceHint: string;
  replenishmentCommission: string;
  replenishmentCommissionHint: string;
  withdrawalCommission: string;
  withdrawalCommissionHint: string;
  withdrawalReplenishmentMethods: string;
  withdrawalReplenishmentMethodsHint: string;
  ipoParticipationMinimalAmount: string;
  ipoParticipationMinimalAmountHint: string;
  creditLeverage: string;
  creditLeverageHint: string;
  officialCountries: string;
  officialCountriesHint: string;
  instrumentsDescription: string;
  instrumentsDescriptionHint: string;
  tariffs: GQLBrokerTariffPayload[];
  features: GQLBrokerFeaturePayload[];
}

export interface GQLGetBrokerByIdDtoPayload {
  broker: GQLBrokerPayload;
}

export interface GQLBrokersPayload {
  brokers: GQLBrokerPayload[];
}

export interface GQLBrokerFilterInput {
  and?: GQLBrokerFilterInput[];
  or?: GQLBrokerFilterInput[];
  creationYear?: ComparableInt32OperationFilterInput;
  initialSpread?: ComparableDoubleOperationFilterInput;
  clientsAmount?: ComparableInt32OperationFilterInput;
  minimalDeposit?: ComparableDoubleOperationFilterInput;
  country?: StringOperationFilterInput;
  minimalDealCommission?: ComparableDoubleOperationFilterInput;
  autoFollow?: BooleanOperationFilterInput;
  ipoParticipant?: BooleanOperationFilterInput;
  freeService?: BooleanOperationFilterInput;
  freeAccountCreation?: BooleanOperationFilterInput;
}

export interface GQLBrokerSortInput {
  creationYear?: SortEnumType;
  clientsAmount?: SortEnumType;
  minimalDealCommission?: SortEnumType;
}

export interface BrokerFilterDto {
  filter?: GQLBrokerFilterInput;
  order?: GQLBrokerSortInput;
}

export interface Broker extends GQLBrokerPayload {}
