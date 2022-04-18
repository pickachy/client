import { Component, Input } from '@angular/core';
import { BestDeal } from '../../../../../core/models/best-deal.model';

@Component({
  selector: 'app-page-home-section-best-deals-list',
  templateUrl: './best-deals-list.component.html',
  styleUrls: ['./best-deals-list.component.scss']
})
export class BestDealsListComponent {
  @Input() data?: BestDeal[];

  trackByIdentity = (index: number, item: BestDeal) => item.id;
}
