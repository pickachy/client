import { Component, Input } from '@angular/core';
import { LoansService } from '@shared/services/loans.service';
import { Loan } from '@models/loan.model';

export interface SortingFilter{
  items: string[];
  onClick: () => void;
}
@Component({
  selector: 'app-page-loans-in-advance-sections-loans-list',
  templateUrl: './loans-list.component.html',
  styleUrls: ['./loans-list.component.scss']
})
export class LoansListComponent {
  @Input() data?: Loan[];

  constructor(loansService: LoansService) {
    this.data = loansService.getLoans();
  }

  onClick(_item: Loan){

  }
}
