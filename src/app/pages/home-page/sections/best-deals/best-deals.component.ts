import { Component } from '@angular/core';
import { Filter, FilterItem } from '../../../../shared/filters/section-filter/section-filter.component';
import { BestDealItemView, BestDealsService } from './best-deals.service';

@Component({
  selector: 'app-page-home-section-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.scss']
})
export class BestDealsComponent {
  filter: Filter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: this.onFilterClick
  };
  bestDeals: BestDealItemView[];

  constructor(bestDealsService: BestDealsService) {
    this.bestDeals = bestDealsService.getBestDeals();
  }

  onFilterClick(_filterItem: FilterItem) {
    console.log('ON FILTER CLICK');
  }
}
