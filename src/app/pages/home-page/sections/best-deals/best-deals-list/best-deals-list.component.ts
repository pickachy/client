import { Component, Input } from '@angular/core';
import { BestDealItemView } from '../best-deals.service';

@Component({
  selector: 'app-page-home-section-best-deals-list',
  templateUrl: './best-deals-list.component.html',
  styleUrls: ['./best-deals-list.component.scss']
})
export class BestDealsListComponent {
  @Input() data?: BestDealItemView[];

  trackByIdentity = (index: number, item: BestDealItemView) => item.id;
}
