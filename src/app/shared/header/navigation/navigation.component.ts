import { Component } from '@angular/core';
import { NavigationRoute } from '../../../app-routing.module';
import { NavigationService } from './navigation.service';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  navigationRoutes: NavigationRoute[];
  constructor(navigationService: NavigationService) {
    this.navigationRoutes = navigationService.getEnhancedNavigationRoutesWithName();
  }
}
