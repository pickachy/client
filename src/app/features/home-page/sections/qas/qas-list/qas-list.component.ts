import { Component, Input } from '@angular/core';
import { QuestionAnswer } from '../../../../../core/models/qa.model';

@Component({
  selector: 'app-page-home-section-qas-list',
  templateUrl: './qas-list.component.html',
  styleUrls: ['./qas-list.component.scss']
})
export class QasListComponent {
  @Input() data?: QuestionAnswer[];
  qaSelectedIds: number[] = [];

  onSelect(id: number) {
    const initialLength = this.qaSelectedIds.length;
    const selectedIds = this.qaSelectedIds.filter(selectedId => selectedId !== id);
    if (selectedIds.length === initialLength) {
      this.qaSelectedIds.push(id);
    }
    else {
      this.qaSelectedIds = selectedIds;
    }
  }
}
