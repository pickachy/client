import { Component } from '@angular/core';
import { NavigationRoute } from '@models/navigation-route.model';
import { NavigationService } from '@shared/services/navigation.service';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigationRoutes: NavigationRoute[];
  constructor(navigationService: NavigationService) {
    this.navigationRoutes = navigationService.enhancedMainRoutes;
  }
}
