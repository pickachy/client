import { Component, Input } from '@angular/core';
import { BestDealItemView } from '../../best-deals.service';

@Component({
  selector: 'app-page-home-section-best-deals-item',
  templateUrl: './best-deals-item.component.html',
  styleUrls: ['./best-deals-item.component.scss']
})
export class BestDealsItemComponent {
  @Input() data?: BestDealItemView;
}
