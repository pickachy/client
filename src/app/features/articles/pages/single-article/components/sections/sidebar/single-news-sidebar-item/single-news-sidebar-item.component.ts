import { Component, Input } from '@angular/core';
import { Link } from '../../../../../core/models/link.model';

@Component({
  selector: 'app-page-single-news-sidebar-item',
  templateUrl: './single-news-sidebar-item.component.html',
  styleUrls: ['./single-news-sidebar-item.component.scss']
})
export class SingleNewsSidebarItemComponent {
  @Input() title: string = '';
  @Input() backgroundColor: string = '#5db9c633';
  @Input() links: Link[] = [{ href: '#', text: 'Мода на гейминг или ETF выгодных вложений? Разбор' }, { href: '#', text: 'Как получать пассивный доход? Обучение' }, { href: '#', text: 'Как правильно застраховать недвижимость' }];
}
