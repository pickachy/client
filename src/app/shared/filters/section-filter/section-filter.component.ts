import { Component, Input } from '@angular/core';

export interface FilterItem {
  name: string;
  isActive?: boolean;
}

export interface Filter {
  onClick: (filter: FilterItem) => void;
  items: FilterItem[];
}

@Component({
  selector: 'app-section-filter',
  templateUrl: './section-filter.component.html',
  styleUrls: ['./section-filter.component.scss']
})
export class SectionFilterComponent {
  @Input() filter?: Filter;

  onClick(filterItem: FilterItem) {
    this.filter?.items.map(item => {
      item.isActive = false;
      if (item == filterItem) {
        item.isActive = true;
      }
    });
    this.filter?.onClick?.(filterItem);
  }
}
