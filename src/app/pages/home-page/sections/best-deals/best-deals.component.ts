import { Component } from '@angular/core';
import { BestDealItemView, BestDealsService } from './best-deals.service';
import { TagFilter, TagFilterItem } from '../../../../shared/filters/tags-filter/tags-filter.component';

@Component({
  selector: 'app-page-home-section-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.scss']
})
export class BestDealsComponent {
  tagFilter: TagFilter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: this.onFilterClick
  };
  bestDeals: BestDealItemView[];

  constructor(bestDealsService: BestDealsService) {
    this.bestDeals = bestDealsService.getBestDeals();
  }

  onFilterClick(_filterItem: TagFilterItem) {
    console.log('ON FILTER CLICK');
  }
}
