import { Component, Input } from '@angular/core';
import { LoanOverview } from '@models/loan.model';
import { getReferralSubIdQueryParams } from '@shared/tools/loanUtils';

@Component({
  selector: 'app-page-loans-in-advance-sections-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent {
  @Input() data?: LoanOverview[];
  referralQueryParams: string = getReferralSubIdQueryParams();
}
