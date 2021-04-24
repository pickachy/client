import { Component } from '@angular/core';
import { NavigationService } from '../header/navigation/navigation.service';
import { NavigationRoute } from '../../app-routing.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  navigationMainRoutes: NavigationRoute[];
  navigationAdditionalRoutes: NavigationRoute[];
  constructor(private navigationService: NavigationService) {
    this.navigationMainRoutes = navigationService.enhancedMainRoutes;
    this.navigationAdditionalRoutes = navigationService.enhancedAdditionalRoutes;
  }
}
