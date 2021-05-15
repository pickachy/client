import { Image } from '@models/image.model';

export enum BankType {
  PRIVAT_BANK,
  MONEY_FAST
}
export interface LoanDto {
  id: number;
  initialAmount: number;
  finalAmount: number;
  maximumProcessingTime: number;
  termDays: number;
  initialRatePercent: number;
  bankType: BankType;
}

export const BankTypeImageMap: { [type: number]: Image } = {
  [BankType.PRIVAT_BANK]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' },
  [BankType.MONEY_FAST]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' }
};

export interface Loan extends LoanDto {
  imageUrl: string;
  alt: string;
}
