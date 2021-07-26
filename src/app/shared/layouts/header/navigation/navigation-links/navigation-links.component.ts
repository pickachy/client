import { Component, Input } from '@angular/core';
import { NavigationRoute } from '@models/navigation-route.model';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html'
})
export class NavigationLinksComponent {
  @Input() links: NavigationRoute[] = [];
  @Input() activeClass: string | undefined = 'active-navigation-link';
  @Input() linkClassName?: string;
}
