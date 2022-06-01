import { Component } from '@angular/core';


@Component({
  selector: 'app-page-brokers-filter',
  templateUrl: './brokers-filter.component.html',
  styleUrls: ['./brokers-filter.component.scss']
})
export class BrokersFilterComponent {
  sortFilterOptions: any = [{ label: 'Самые низкие цены', value: 1 }, { label: 'По популярности', value: 2 }];
  countryFilterOptions: any = [{ label: 'Страна', value: 1 }];
  sortId: number = 1;
  countryId: number = 1;
}
