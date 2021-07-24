import { Seo, SeoDto } from '@models/seo.model';
import { Loan, LoanDto, LoanOverview, LoanOverviewDto } from '@models/loan.model';

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
  seo: Seo;
  loans: LoanOverview[];
}
export interface SingleLoanInAdvancePageAggregation {
  seo: Seo;
  loan: Loan;
}
