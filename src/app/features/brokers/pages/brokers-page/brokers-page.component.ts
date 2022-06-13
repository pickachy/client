import { Component, OnInit } from '@angular/core';
import { PagesService } from '@core/services/pages.service';
import { Broker } from '@core/models/broker.model';
import { BrokersService } from '@core/services/brokers.service';
import { BrokersPageService } from '@core/services/brokers-page.service';

@Component({
  selector: 'app-page-brokers',
  templateUrl: './brokers-page.component.html',
  styleUrls: ['./brokers-page.component.scss']
})
export class BrokersPageComponent implements OnInit {
  brokers: Broker[] = [];

  constructor(private _pagesService: PagesService, private _brokersPage: BrokersPageService, private _brokersService: BrokersService) {}

  ngOnInit(): void {
    this._pagesService.getBrokersPageAggregation(this._brokersPage.defaultFilter).subscribe(data => {
      this.brokers = data.brokers;
      this._pagesService.setSeoAndOg(data.page);
    });

    this._brokersPage.brokersFilter$.subscribe(filter => {
      this._brokersService.getBrokers(filter).subscribe(data => this.brokers = data);
    });
  }

}
