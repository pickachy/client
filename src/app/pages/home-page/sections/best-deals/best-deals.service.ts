import { Injectable } from '@angular/core';

export interface Image {
  src: string;
  alt: string;
}

export enum BestDealType {
  LOANS
}

export interface BestDealDto {
  id: number;
  title: string;
  description: string;
  annualPercent: number;
  loanTermsDays: number;
  type: BestDealType;
}

export interface BestDealItemView extends BestDealDto {
  src: string;
  alt: string;
}

@Injectable({
  providedIn: 'root'
})
export class BestDealsService {
  imagesMap: { [type: number]: Image } = {
    [BestDealType.LOANS]: {
      src: 'assets/images/home-page/best-deals/privatbank.svg',
      alt: 'pb'
    }
  };
  getBestDeals = (): BestDealItemView[] => [
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
