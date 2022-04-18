import { Component, Input } from '@angular/core';

export interface TagFilterItem {
  name: string;
  isActive?: boolean;
}

export interface TagFilter {
  onClick: (filter: TagFilterItem) => void;
  items: TagFilterItem[];
}

export type FilterTheme = 'default' | 'circled';

@Component({
  selector: 'app-sections-tags-filter',
  templateUrl: './tags-filter.component.html',
  styleUrls: ['./tags-filter.component.scss']
})
export class TagsFilterComponent {
  @Input() tag?: TagFilter;
  @Input() theme: FilterTheme = 'default';
  @Input() alignCenter: boolean = false;

  onClick(filterItem: TagFilterItem) {
    this.tag?.items.map(item => {
      item.isActive = false;
      if (item == filterItem) {
        item.isActive = true;
      }
    });
    this.tag?.onClick?.(filterItem);
  }
}
