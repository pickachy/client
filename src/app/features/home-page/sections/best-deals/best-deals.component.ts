import { Component } from '@angular/core';
import { TagFilter, TagFilterItem } from '@shared/filters/tags-filter/tags-filter.component';
import { LoansService } from '@shared/../../../../core/services/loans.service';
import { BestDeal } from '../../../../core/models/best-deal.model';

@Component({
  selector: 'app-page-home-components-best-deals',
  templateUrl: './best-deals.component.html',
  styleUrls: ['./best-deals.component.scss']
})
export class BestDealsComponent {
  tagFilter: TagFilter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: this.onFilterClick
  };
  bestDeals: BestDeal[];

  constructor(loansService: LoansService) {
    this.bestDeals = loansService.getBestDeals();
  }

  onFilterClick(_filterItem: TagFilterItem) {
    console.log('ON FILTER CLICK');
  }
}
