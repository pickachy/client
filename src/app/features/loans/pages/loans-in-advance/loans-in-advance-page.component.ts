import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { getCurrentDate } from '@shared/tools';
import { Loan } from '@core/models/loan.model';
import { PagesService } from '@core/services/pages.service';

@Component({
  selector: 'app-page-loans-in-advance',
  templateUrl: './loans-in-advance-page.component.html',
  styleUrls: ['./loans-in-advance-page.component.scss']
})
export class LoansInAdvancePageComponent implements OnInit, OnDestroy {
  private querySubscription?: Subscription;
  loans?: Loan[];
  loansCount: number = 0;
  currentDate: string = getCurrentDate();

  constructor(private pageService: PagesService) {}

  ngOnInit(): void {
    this.querySubscription = this.pageService.getHomePageAggregation().subscribe(data => {
      this.loans = data.loans;
      this.loansCount = data.loans.length;
      this.pageService.setSeoAndOg(data.seo);
    });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
