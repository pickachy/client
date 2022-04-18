import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { NavigationRoute } from '@core/models/navigation-route.model';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationLinksComponent {
  @Input() links: NavigationRoute[] = [];
  @Input() activeClass: string | undefined = 'active-navigation-link';
  @Input() linkClassName?: string;
}
