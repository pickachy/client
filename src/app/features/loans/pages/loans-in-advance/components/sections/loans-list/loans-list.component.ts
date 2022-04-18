import { Component, DoCheck, Input } from '@angular/core';
import { buildReferralLink } from '@shared/tools';
import { Loan } from '@core/models/loan.model';

@Component({
  selector: 'app-page-loans-in-advance-sections-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent implements DoCheck {
  @Input() data?: Loan[];

  getReferralLink(link: string): string | undefined {
    return buildReferralLink(link);
  }

  loanTrackBy(_: number, loan: Loan) {
    return loan.providerTypeId;
  }

  ngDoCheck(): boolean {
    return false;
    console.log('update list');
  }
}
