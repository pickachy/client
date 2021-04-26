import { Component, Input } from '@angular/core';
import { QAItemView } from '../qas.service';

@Component({
  selector: 'app-page-home-section-qas-list',
  templateUrl: './qas-list.component.html',
  styleUrls: ['./qas-list.component.scss']
})
export class QasListComponent {
  @Input() data?: QAItemView[];
  qaSelectedId?: number;

  onSelect(id: number) {
    this.qaSelectedId = this.qaSelectedId !== id ? id : undefined;
  }
}
