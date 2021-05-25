import { Component, OnInit } from '@angular/core';
import { LoansService } from '@shared/services/loans.service';
import { Loan } from '@models/loan.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-loans-in-advance-single',
  templateUrl: './loan-in-advance-single-page.component.html',
  styleUrls: ['./loan-in-advance-single-page.component.scss']
})
export class LoanInAdvanceSinglePageComponent implements OnInit {
  data?: Loan;

  constructor(private loansService: LoansService, private activateRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.data = this.loansService.getLoanById(Number(this.activateRoute.snapshot.params['id']));
  }
}
