import { Component, Input, OnInit } from '@angular/core';
export interface SortingFilter {
  items: string[];
  onClick: () => void;
}
@Component({
  selector: 'app-page-loans-in-advance-sections-sorting-filter',
  templateUrl: './sorting-filter.component.html',
  styleUrls: ['./sorting-filter.component.scss']
})
export class SortingFilterComponent implements OnInit {
  @Input() data?: SortingFilter;
  selectedItem?: string;

  ngOnInit(): void {
    this.selectedItem = this.data?.items[0];
  }

  onClick(item: string) {
    this.selectedItem = item;
  }
}
