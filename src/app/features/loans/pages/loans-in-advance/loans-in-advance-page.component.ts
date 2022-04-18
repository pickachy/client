import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { getCurrentDate } from '@shared/tools';
import { Loan } from '@core/models/loan.model';
import { PagesService } from '@core/services/pages.service';

@Component({
  selector: 'app-page-loans-in-advance',
  templateUrl: './loans-in-advance-page.component.html',
  styleUrls: ['./loans-in-advance-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class LoansInAdvancePageComponent implements OnInit {
  loans?: Loan[];
  loansCount: number = 0;
  currentDate: string = getCurrentDate();

  constructor(private pageService: PagesService) {}

  ngOnInit(): void {
    this.pageService.getHomePageAggregation().subscribe(data => {
      this.loans = data.loans;
      this.loansCount = data.loans.length;
      this.pageService.setSeoAndOg(data.seo);
    });
  }
}
