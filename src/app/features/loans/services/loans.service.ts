import { Injectable } from '@angular/core';
import { BestDeal, BestDealType, Loan, LoanProviderType, LoanProviderTypeImageMap } from '@core/models';
import { Image } from '@core/models/image.model';
const loansData: any = [
  {
    id: 0,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  },
  {
    id: 1,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  },
  {
    id: 2,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  },
  {
    id: 3,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  },
  {
    id: 4,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  },
  {
    id: 5,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  },
  {
    id: 6,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  },
  {
    id: 8,
    imageUrl: LoanProviderTypeImageMap[LoanProviderType.LOANY].src,
    initialAmount: 2000,
    finalAmount: 10000,
    maximumProcessingTime: 15,
    termDays: 365,
    initialRatePercent: 0,
    bankType: LoanProviderType.LOANY,
    alt: LoanProviderTypeImageMap[LoanProviderType.LOANY].alt
  }
];

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
  getLoans(): Loan[] {
    return loansData;
  }

  getLoanById(id: number): Loan {
    return loansData.find((loan: any) => loan.id === id)!;
  }

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
