import { Component } from '@angular/core';

@Component({
  selector: 'app-page-home-section-exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent {
  usd: number = 28.05;
  eur: number = 32.56;
  bit: number = 700;
  gold: number = 569;
  id: string = '5a15b13c36e7a7f00cf0d7cb';
  people: any[] = [
    {
      value: '5a15b13c36e7a7f00cf0d7cb',
      label: 'Монобанка'
    },
    {
      value: '5a15b13c36e7a7f00cf0d7cd',
      label: 'Приват банка'
    }
  ];
}
