import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavigationService } from '@core/services/navigation.service';
import { NavigationRoute } from '@core/models/navigation-route.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooterComponent {
  navigationMainRoutes: NavigationRoute[];
  navigationAdditionalRoutes: NavigationRoute[];
  constructor(private navigationService: NavigationService) {
    this.navigationMainRoutes = navigationService.enhancedMainRoutes;
    this.navigationAdditionalRoutes = navigationService.enhancedAdditionalRoutes;
  }
}
