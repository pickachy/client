import { Injectable } from '@angular/core';
import { Image } from '../../../../../shared/media.types';

enum BankType {
  PRIVAT_BANK,
  MONEY_FAST
}

const BankTypeImageMap: { [type: number]: Image } = {
  [BankType.PRIVAT_BANK]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' },
  [BankType.MONEY_FAST]: { src: 'assets/images/loans-page/loans-in-advance-page/sportbank.png', alt: 'privat bank' }
};

interface LoanDto {
  id: number;
  initialAmount: number;
  finalAmount: number;
  maximumProcessingTime: number;
  termDays: number;
  initialRatePercent: number;
  bankType: BankType;
}

export interface LoanItemView extends LoanDto {
  imageUrl: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  getLoans = (): LoanItemView[] => [
    {
      id: 0,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    },
    {
      id: 1,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    },
    {
      id: 2,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    },
    {
      id: 3,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    },
    {
      id: 4,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    },
    {
      id: 5,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    },
    {
      id: 6,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    },
    {
      id: 8,
      imageUrl: BankTypeImageMap[BankType.MONEY_FAST].src,
      initialAmount: 2000,
      finalAmount: 10000,
      maximumProcessingTime: 15,
      termDays: 365,
      initialRatePercent: 0,
      bankType: BankType.MONEY_FAST,
      alt: BankTypeImageMap[BankType.MONEY_FAST].alt
    }
  ];
}
