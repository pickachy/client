import { Component, Input } from '@angular/core';
import { buildReferralLink } from '@shared/tools/loanUtils';
import { Loan } from '@models/loan.model';

@Component({
  selector: 'app-page-loans-in-advance-sections-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent {
  @Input() data?: Loan[];

  getReferralLink(link: string): string | undefined{
    return buildReferralLink(link);
  }
}
