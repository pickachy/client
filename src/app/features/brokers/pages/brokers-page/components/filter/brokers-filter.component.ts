import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BrokersService } from '@core/services/brokers.service';
import { debounceTime } from 'rxjs';
import { BrokerFilterDto, GQLBrokerFilterInput, GQLBrokerSortInput } from '@core/models/broker.model';
import { SortEnumType } from '@core/models/filter.model';
import { BrokersPageService } from '@core/services/brokers-page.service';

@Component({
  selector: 'app-page-brokers-filter',
  templateUrl: './brokers-filter.component.html',
  styleUrls: ['./brokers-filter.component.scss']
})
export class BrokersFilterComponent implements OnInit {
  sortFilterOptions: any = [
    { label: 'Самые низкие цены', value: 1 },
    { label: 'По популярности', value: 2 },
    { label: 'Колличество клиентов', value: 3 }
  ];
  countryFilterOptions: any = [
    { label: 'Выберите страну', value: 'null' },
    { label: 'Украина', value: 'ua' },
    { label: 'Россия', value: 'ru' }
  ];

  form = new FormGroup({
    sorting: new FormControl(1),
    country: new FormControl('null'),
    freeAccountRegistration: new FormControl(false),
    autoFollow: new FormControl(false),
    ipoParticipant: new FormControl(false),
    freeService: new FormControl(false),
    minimalDeposit: new FormControl(null)
  });

  constructor(private _brokersService: BrokersService, private _brokersPageService: BrokersPageService) {}
  ngOnInit(): void {
    this.form.valueChanges.pipe(debounceTime(50)).subscribe((result) => {
      console.log(result.minimalDeposit);
      const filter: GQLBrokerFilterInput = {};
      const order: GQLBrokerSortInput = {};

      if (this.form.controls.country.value !== 'null') {
        filter.country = { eq: this.form.controls.country.value };
      }

      if (this.form.controls.sorting.value === 1) {
        order.minimalDealCommission = SortEnumType.ASC;
      }

      if (this.form.controls.sorting.value === 2) {
        order.clientsAmount = SortEnumType.DESC;
      }

      if (this.form.controls.sorting.value === 3) {
        order.creationYear = SortEnumType.DESC;
      }

      if (this.form.controls.freeAccountRegistration.value) {
        filter.freeAccountCreation = { eq: true };
      }

      if (this.form.controls.autoFollow.value) {
        filter.autoFollow = { eq: true };
      }

      if (this.form.controls.ipoParticipant.value) {
        filter.ipoParticipant = { eq: true };
      }

      if (this.form.controls.freeService.value) {
        filter.freeService = { eq: true };
      }

      if (this.form.controls.minimalDeposit.value) {
        filter.minimalDeposit = { eq: this.form.controls.minimalDeposit.value };
      }

      const dto: BrokerFilterDto = {};
      if (Object.keys(filter).length !== 0) {
        dto.filter = filter;
      }
      if (Object.keys(order).length !== 0) {
        dto.order = order;
      }
      this._brokersPageService.updateFilter(dto);
    });
  }
}
