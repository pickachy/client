import { Component, Input } from '@angular/core';
import { Link } from '@models/link.model';

@Component({
  selector: 'app-page-single-news-sidebar-item',
  templateUrl: './single-news-sidebar-item.component.html',
  styleUrls: ['./single-news-sidebar-item.component.scss']
})
export class SingleNewsSidebarItemComponent {
  @Input() title: string = '';
  @Input() backgroundColor: string = '#5db9c633';
  @Input() links: Link[] = [];
}