import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { buildReferralLink } from '@shared/tools';
import { PagesService } from '@core/services/pages.service';
import { Loan } from '@core/models/loan.model';

@Component({
  selector: 'app-page-loans-in-advance-single',
  templateUrl: './loan-in-advance-single-page.component.html',
  styleUrls: ['./loan-in-advance-single-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoanInAdvanceSinglePageComponent implements OnInit, OnDestroy {
  data?: Loan;

  private querySubscription?: Subscription;

  constructor(private pagesService: PagesService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySubscription = this.pagesService
      .getSingleLoanInAdvancePageAggregation(Number(this.activateRoute.snapshot.params['id']))
      .subscribe(data => {
        this.pagesService.setSeoAndOg(data.loan.page);
        this.data = data.loan;
      });
  }
  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }

  scrollToElement($element: HTMLElement): void {
    $element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }

  getReferralLink(link: string): string | undefined{
    return buildReferralLink(link);
  }
}
