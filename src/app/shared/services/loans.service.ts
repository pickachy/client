import { Injectable } from '@angular/core';
import { BestDeal, BestDealType } from '@models/best-deal.model';
import { BankType, BankTypeImageMap, Loan } from '@models/loan.model';
import { Image } from '@models/image.model';

@Injectable({
  providedIn: 'root'
})
export class LoansService {
  imagesMap: { [type: number]: Image } = {
    [BestDealType.LOANS]: {
      src: 'assets/images/home-page/best-deals/privatbank.svg',
      alt: 'pb'
    }
  };
  getLoans = (): Loan[] => [
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
  getBestDeals = (): BestDeal[] => [
    {
      id: 0,
      title: 'Приват Банк',
      description: 'Кредит "Доверие"',
      annualPercent: 4.9,
      loanTermsDays: 90,
      type: BestDealType.LOANS,
      src: this.imagesMap[BestDealType.LOANS].src,
      alt: this.imagesMap[BestDealType.LOANS].alt
    },
    {
      id: 0,
      title: 'Приват Банк',
      description: 'Кредит "Доверие"',
      annualPercent: 4.9,
      loanTermsDays: 90,
      type: BestDealType.LOANS,
      src: this.imagesMap[BestDealType.LOANS].src,
      alt: this.imagesMap[BestDealType.LOANS].alt
    },
    {
      id: 0,
      title: 'Приват Банк',
      description: 'Кредит "Доверие"',
      annualPercent: 4.9,
      loanTermsDays: 90,
      type: BestDealType.LOANS,
      src: this.imagesMap[BestDealType.LOANS].src,
      alt: this.imagesMap[BestDealType.LOANS].alt
    }
  ];
}
