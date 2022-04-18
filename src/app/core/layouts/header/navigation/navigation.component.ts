import { Component } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { NavigationRoute } from '@core/models/navigation-route.model';

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
