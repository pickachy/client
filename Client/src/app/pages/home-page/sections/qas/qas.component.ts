import { Component } from '@angular/core';
import { TagFilter } from '@shared/filters/tags-filter/tags-filter.component';
import { QuestionAnswer } from '@models/qa.model';
import { QasService } from '@shared/services/qas.service';

@Component({
  selector: 'app-page-home-section-qas',
  templateUrl: './qas.component.html',
  styleUrls: ['./qas.component.scss']
})
export class QasComponent {
  tags: TagFilter = {
    items: [{ name: 'Кредиты', isActive: true }, { name: 'Кредитные карты' }, { name: 'Ипотеки' }, { name: 'Микрозаймы' }],
    onClick: () => null
  };
  mainTags: any = [{ label: 'Погашение кредита', value: '0' }];
  subTags: any = [{ label: 'Погашение кредита', value: '0' }];

  mainTag: string = '0';
  subTag: string = '0';
  qas: QuestionAnswer[];

  constructor(qasService: QasService) {
    this.qas = qasService.getQas();
  }


}
