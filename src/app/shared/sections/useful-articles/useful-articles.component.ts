import { Component, Input } from '@angular/core';
import { Filter } from '../../filters/section-filter/section-filter.component';
import { ArticleItemView } from './useful-articles.service';

@Component({
  selector: 'app-sections-useful-articles',
  templateUrl: './useful-articles.component.html',
  styleUrls: ['./useful-articles.component.scss']
})
export class UsefulArticlesComponent {
  @Input() filter?: Filter;
  @Input() articles?: ArticleItemView[];
}
