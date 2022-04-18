import { Component, Input } from '@angular/core';
import { Breadcrumbs } from '@core/models/breadcrumbs.model';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
  @Input() crumbs?: Breadcrumbs;
}
