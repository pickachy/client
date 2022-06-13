import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationRoute } from '@core/models/navigation-route.model';
import { BrokersPageComponent } from './pages/brokers-page/brokers-page.component';

const routes: NavigationRoute[] = [
  {
    name: 'Брокеры',
    path: '',
    component: BrokersPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BrokersRoutingModule {}
