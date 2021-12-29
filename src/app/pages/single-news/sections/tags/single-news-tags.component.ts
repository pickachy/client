import { Component, Input } from '@angular/core';
import { Link } from '@models/link.model';

@Component({
  selector: 'app-page-single-news-tags',
  templateUrl: './single-news-tags.component.html',
  styleUrls: ['./single-news-tags.component.scss']
})
export class SingleNewsTagsComponent {
  @Input() links: Link[] = [{ href: '#', text: 'Кредиты' }, { href: '#', text: 'Банки' }, { href: '#', text: 'Овердрафт' }];
}
