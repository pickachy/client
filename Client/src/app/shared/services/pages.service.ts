import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HomePageAggregation, SingleLoanInAdvancePageAggregation } from '@models/page.model';
import { LoanProviderType } from '@models/loan.model';

const GET_HOME_PAGE_AGGREGATION = gql`
  query GetHomeWebPageAggregation {
    homeWebPageAggregation {
      seo {
        title
        keywords
        description
      }
      loans {
        id
        amountFrom
        amountTo
        initialDayRate
        processingTimeMinutes
        termDays
      }
    }
  }
`;

const GET_LOAN_IN_ADVANCE_SINGLE_PAGE_AGGREGATION = gql`
  query GetLoanInAdvanceSingleWebPageAggregation($id: Int!) {
    loanInAdvanceSingleWebPageAggregation(id: $id) {
      seo {
        title
        keywords
        description
      }
      loan {
        id
        amountFrom
        amountTo
        bonusesDescription
        borrowerAgeFrom
        borrowerAgeTo
        commissionDescription
        dayRate
        extraInfo
        initialDayRate
        isOnlineProcessing
        issueWorkingHoursDescription
        processingTimeMinutes
        repaymentMethodsDescription
        termDays
        withdrawalMethodsDescription
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class PagesService {
  constructor(private apollo: Apollo) {}

  public getHomePageAggregation(): Observable<HomePageAggregation> {
    return this.apollo
      .query<HomePageAggregation>({ query: GET_HOME_PAGE_AGGREGATION })
      .pipe(map(result => result.data));
  }

  public getSingleLoanInAdvancePageAggregation(id: LoanProviderType): Observable<SingleLoanInAdvancePageAggregation> {
    return this.apollo
      .query<SingleLoanInAdvancePageAggregation>({ query: GET_LOAN_IN_ADVANCE_SINGLE_PAGE_AGGREGATION, variables: { id } })
      .pipe(map(result => result.data));
  }
}
