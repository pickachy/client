import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { buildReferralLink } from '@shared/tools';
import { Loan } from '@core/models/loan.model';

@Component({
  selector: 'app-page-loans-in-advance-sections-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoansListComponent {
  @Input() data?: Loan[];

  getReferralLink(link: string): string | undefined{
    return buildReferralLink(link);
  }

  loanTrackBy(_: number, loan: Loan) {
    return loan.providerTypeId;
  }
}
