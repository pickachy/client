import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { addDays, getDateDayWithMonthGeneric } from '@shared/tools';

@Component({
  selector: 'app-page-loans-in-advance-single-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnChanges, OnInit, OnDestroy {
  @Input() amountFrom: number = 0;
  @Input() amountTo: number = 0;
  @Input() initialDayRate: number = 0;
  @Input() dayRate: number = 0;
  @Input() referralLink?: string;

  sumDescription: string = '';
  termDescription: string = '';
  rateDescription: string = '';
  isFirstProcessing: boolean = true;

  form = new FormGroup({
    sum: new FormControl(this.amountFrom, [control => Validators.min(this.amountFrom)(control), control => Validators.max(this.amountTo)(control)]),
    termDays: new FormControl('1', [Validators.min(1), Validators.max(30)])
  });

  formSubscription?: Subscription;

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
    this.formSubscription = this.form.valueChanges.subscribe(() => this.handleCalculatorChange());
  }

  ngOnDestroy(): void {
    this.formSubscription?.unsubscribe();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.f.sum.setValue(changes['amountFrom'].currentValue.toString());
    this.rateDescription = this.getRateDescription();
    this.handleCalculatorChange();
  }

  handleCalculatorChange(): void {
    if (this.form.invalid) {
      return;
    }

    const rate = this.isFirstProcessing ? this.initialDayRate : this.dayRate;

    const sum = this.f.sum.value ? Number(this.f.sum.value) : 0;
    const termDays = this.f.termDays.value ? Number(this.f.termDays.value) : 0;

    const finalSum = sum + sum * (rate / 100) * termDays;

    this.termDescription = getDateDayWithMonthGeneric(addDays(new Date(), termDays));
    this.sumDescription = finalSum.toFixed(2);
  }

  handleRateModeChange(): void {
    this.rateDescription = this.getRateDescription();
    this.handleCalculatorChange();
  }

  getRateDescription(): string {
    return this.initialDayRate === this.dayRate ? `${this.dayRate}%` : this.isFirstProcessing ? `от ${this.initialDayRate}%` : `${this.dayRate}%`;
  }
}
