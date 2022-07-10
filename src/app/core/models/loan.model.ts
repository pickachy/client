import { GQLPagePayload } from '@core/models/page.model';

export interface GQLLoanPayload {
  id: number;
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
  imageRelativeUrl: string;
  name: string;
  url: string;
  amountFrom: number;
  amountTo: number;
  dayRate: number;
  initialDayRate: number;
  processingTimeMinutes: number;
  termDays: number;
  page: GQLPagePayload;
}

export interface Loan extends GQLLoanPayload{}
