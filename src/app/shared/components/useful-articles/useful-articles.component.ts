import { Component, Input } from '@angular/core';
import { TagFilter } from '../../filters/tags-filter/tags-filter.component';
import { Article } from '../../../core/models/article.model';

@Component({
  selector: 'app-sections-useful-articles',
  templateUrl: './useful-articles.component.html',
  styleUrls: ['./useful-articles.component.scss']
})
export class UsefulArticlesComponent {
  @Input() filter?: TagFilter;
  @Input() data?: Article[];
}
