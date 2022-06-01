import { Component } from '@angular/core';


@Component({
  selector: 'app-page-brokers',
  templateUrl: './brokers-page.component.html',
  styleUrls: ['./brokers-page.component.scss']
})
export class BrokersPageComponent {
  sortFilterOptions: any = [{ label: 'Самые низкие цены', value: 1 }, { label: 'По популярности', value: 2 }];
  countryFilterOptions: any = [{ label: 'Страна', value: 1 }];
  sortId: number = 1;
  countryId: number = 1;
}
