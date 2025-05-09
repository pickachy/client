import { Component } from '@angular/core';
import { TagFilter } from '@shared/filters/tags-filter/tags-filter.component';
import { QuestionAnswer } from '../../../../core/models/qa.model';
import { QasService } from '@shared/../../../../core/services/qas.service';

@Component({
  selector: 'app-page-home-components-qas',
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
