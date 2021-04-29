import { Component, Input } from '@angular/core';
import { LoanItemView, LoansService } from './loans.service';
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
  @Input() data?: LoanItemView[];

  constructor(loansService: LoansService) {
    this.data = loansService.getLoans();
  }

  onClick(_item: LoanItemView){

  }
}
