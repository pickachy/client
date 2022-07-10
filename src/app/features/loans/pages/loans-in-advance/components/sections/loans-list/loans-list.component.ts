import { Component, Input } from '@angular/core';
import { buildReferralLink } from '@shared/tools';
import { Loan } from '@core/models/loan.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-page-loans-in-advance-sections-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent{
  @Input() data?: Loan[];

  serverAssetsStoragePath = environment.serverAssetsStoragePath;

  getReferralLink(link: string): string | undefined {
    return buildReferralLink(link);
  }

  loanTrackBy(_: number, loan: Loan) {
    return loan.id;
  }
}
