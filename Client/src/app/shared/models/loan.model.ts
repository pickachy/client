import { Image } from '@models/image.model';

export enum LoanProviderType {
  SHVIDKO_GROSHI = 1,
  LOANY = 2
}

export const LoanProviderTypeImageMap: { [type: number]: Image } = {
  [LoanProviderType.SHVIDKO_GROSHI]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' },
  [LoanProviderType.LOANY]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' }
};

export interface LoanOverviewDto {
  id: LoanProviderType
  amountFrom: number;
  amountTo: number;
  dayRate: number;
  initialDayRate: number;
  processingTimeMinutes: number;
  termDays: number;
}

export interface LoanDto extends LoanOverviewDto{
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
}

export interface LoanOverview extends LoanOverviewDto {
  imageUrl: string;
  alt: string;
}

export interface Loan extends LoanDto {
  imageUrl: string;
  alt: string;
}
