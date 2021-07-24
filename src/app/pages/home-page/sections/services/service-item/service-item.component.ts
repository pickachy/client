import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-home-section-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent {
  @Input() title?: string;
  @Input() href?: string;
  @Input() src?: string;
  @Input() alt?: string;
  @Input() color?: string;
}
