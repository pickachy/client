import { Component, OnDestroy, OnInit } from '@angular/core';
import { PagesService } from '@shared/services/pages.service';
import { Subscription } from 'rxjs';
import { HomePageAggregation } from '@models/page.model';
import { Meta, Title } from '@angular/platform-browser';
import { getCurrentDate } from '@shared/tools/dateUtils';

@Component({
  selector: 'app-page-loans-in-advance',
  templateUrl: './loans-in-advance-page.component.html',
  styleUrls: ['./loans-in-advance-page.component.scss']
})
export class LoansInAdvancePageComponent implements OnInit, OnDestroy {
  private querySubscription?: Subscription;
  pageAggregation?: HomePageAggregation;
  loansCount: number = 0;
  currentDate: string = getCurrentDate();

  constructor(
    private title: Title,
    private meta: Meta,
    private pageService: PagesService
  ) {
  }

  ngOnInit(): void {
    this.querySubscription = this.pageService.getHomePageAggregation().subscribe(data => {
      this.pageAggregation = data;
      this.loansCount = data.loans.length;
      this.title.setTitle(data.seo.title);
      this.meta.updateTag({ name: 'description', content: data.seo.description });
      this.meta.updateTag({ name: 'keywords', content: data.seo.keywords });
    });
  }

  ngOnDestroy(): void {
    this.querySubscription?.unsubscribe();
  }
}
