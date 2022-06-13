import { Injectable } from '@angular/core';

import { BrokerFilterDto } from '@core/models/broker.model';
import { SortEnumType } from '@core/models/filter.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrokersPageService {
  public defaultFilter: BrokerFilterDto = {
    order: {
      minimalDealCommission: SortEnumType.ASC
    }
  }

  private _brokersFilter: ReplaySubject<BrokerFilterDto> = new ReplaySubject<BrokerFilterDto>(1);

  public brokersFilter$ = this._brokersFilter.asObservable();

  updateFilter(filter: BrokerFilterDto){
    this._brokersFilter.next(filter);
  }
}
