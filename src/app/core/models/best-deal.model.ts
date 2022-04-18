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

export interface BestDeal extends BestDealDto {
  src: string;
  alt: string;
}
