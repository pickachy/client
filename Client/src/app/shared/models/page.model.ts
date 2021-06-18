import { SeoDto } from '@models/seo.model';
import { LoanDto, LoanOverviewDto } from '@models/loan.model';

export interface HomePageAggregationDto {
  homeWebPageAggregation: {
    seo: SeoDto;
    loans: LoanOverviewDto[];
  };
}

export interface SingleLoanInAdvancePageAggregationDto {
  loanInAdvanceSingleWebPageAggregation: {
    seo: SeoDto;
    loan: LoanDto;
  };
}

export interface HomePageAggregation {
  seo: SeoDto;
  loans: LoanOverviewDto[];
}
export interface SingleLoanInAdvancePageAggregation {
  seo: SeoDto;
  loan: LoanDto;
}
