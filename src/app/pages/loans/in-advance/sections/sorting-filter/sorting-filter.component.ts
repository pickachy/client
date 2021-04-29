import { Component, Input } from '@angular/core';
export interface SortingFilter{
  items: string[];
  onClick: () => void;
}
@Component({
  selector: 'app-page-loans-in-advance-sections-sorting-filter',
  templateUrl: './sorting-filter.component.html',
  styleUrls: ['./sorting-filter.component.scss']
})
export class SortingFilterComponent {
  @Input() data?: SortingFilter;
  selectedItem?: string

  onClick(item: string){
    this.selectedItem = item;
  }
}
