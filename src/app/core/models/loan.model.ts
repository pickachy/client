import { Image } from './image.model';
import { GQLPagePayload } from '@core/models/page.model';

export enum LoanProviderType {
  CREDIT7 = 1,
  CREDIT_PLUS = 2,
  MY_CREDIT = 3,
  SHVIDKO_GROSHI = 4,
  DINERO = 5,
  E_GROSHI = 6,
  TENGO = 7,
  CCLOAN = 8,
  CASH_BERRY = 9,
  ALEX_CREDIT = 10,
  MONEYEVO = 11,
  MILOAN = 12,
  BISTRO_ZAYM = 13,
  VASHA_GOTIVOCHKA = 14,
  FORZA_CREDIT = 15,
  SOS_CREDIT = 16,
  CREDIT_KASSA = 17,
  ZECREDIT = 18,
  KACHAY_GROSHI = 19,
  MONEY4YOU = 20,
  LOANY = 21,
  KF_UA = 22,
  CREDIT_BOX = 23,
  POZICHKA = 24,
  MONEY_BOOM = 25,
  NEOCREDIT = 26,
  BANANA_CREDIT = 27,
  EVRO_GROSHI = 28,
  MONETKA = 29
}


export const LoanProviderTypeImageMap: { [type: number]: Image } = {
  [LoanProviderType.SHVIDKO_GROSHI]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' },
  [LoanProviderType.LOANY]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' }
};


export interface GQLLoanPayload {
  bonusesDescription: string;
  borrowerAgeFrom: number;
  borrowerAgeTo: number;
  commissionDescription: string;
  extraInfo: string;
  isOnlineProcessing: boolean;
  issueWorkingHoursDescription: string;
  repaymentMethodsDescription: string;
  withdrawalMethodsDescription: string;
  receiversDescription: string;
  providerTypeId: LoanProviderType;
  providerImageExtension: string;
  providerName: string;
  referralLink: string;
  amountFrom: number;
  amountTo: number;
  dayRate: number;
  initialDayRate: number;
  processingTimeMinutes: number;
  termDays: number;
  page: GQLPagePayload;
}

export interface Loan extends GQLLoanPayload{}
