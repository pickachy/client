import { Image } from '@models/image.model';

export enum BankType {
  PRIVAT_BANK = 'Privat Bank',
  MONEY_FAST = 'Money Fast'
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

export const BankTypeImageMap: { [type: string]: Image } = {
  [BankType.PRIVAT_BANK]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' },
  [BankType.MONEY_FAST]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' }
};

export interface Loan extends LoanDto {
  imageUrl: string;
  alt: string;
}
