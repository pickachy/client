import { Component, Input } from '@angular/core';
import { QAItemView } from '../qas.service';

@Component({
  selector: 'app-page-home-section-qas-list',
  templateUrl: './qas-list.component.html',
  styleUrls: ['./qas-list.component.scss']
})
export class QasListComponent {
  @Input() data?: QAItemView[];
  qaSelectedIds: number[] = [];

  onSelect(id: number) {
    const initialLength = this.qaSelectedIds.length;
    const selectedIds = this.qaSelectedIds.filter(selectedId => selectedId !== id);
    if (selectedIds.length === initialLength) {
      this.qaSelectedIds.push(id);
    }
    else{
      this.qaSelectedIds = selectedIds;
    }
  }
}
