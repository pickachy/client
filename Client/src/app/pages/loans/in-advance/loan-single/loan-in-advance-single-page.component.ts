import { Component, OnDestroy, OnInit } from '@angular/core';
import { Loan } from '@models/loan.model';
import { ActivatedRoute } from '@angular/router';
import { PagesService } from '@shared/services/pages.service';
import { Subscription } from 'rxjs';
import { Meta, Title } from '@angular/platform-browser';
import { buildReferralLink } from '@shared/tools/loanUtils';

@Component({
  selector: 'app-page-loans-in-advance-single',
  templateUrl: './loan-in-advance-single-page.component.html',
  styleUrls: ['./loan-in-advance-single-page.component.scss']
})
export class LoanInAdvanceSinglePageComponent implements OnInit, OnDestroy {
  data?: Loan;

  private querySubscription?: Subscription;

  constructor(private title: Title, private meta: Meta, private pagesService: PagesService, private activateRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySubscription = this.pagesService
      .getSingleLoanInAdvancePageAggregation(Number(this.activateRoute.snapshot.params['id']))
      .subscribe(data => {
        this.title.setTitle(data.seo.title);
        this.meta.updateTag({ name: 'description', content: data.seo.description });
        this.meta.updateTag({ name: 'keywords', content: data.seo.keywords });
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
