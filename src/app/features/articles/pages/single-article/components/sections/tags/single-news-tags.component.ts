import { Component, Input } from '@angular/core';
import { Link } from '@core';

@Component({
  selector: 'app-page-single-news-tags',
  templateUrl: './single-news-tags.component.html',
  styleUrls: ['./single-news-tags.component.scss']
})
export class SingleNewsTagsComponent {
  @Input() links: Link[] = [];
}
