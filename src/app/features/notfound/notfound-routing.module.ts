import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationRoute } from '@core/models';
import { PageNotFoundComponent } from './pages/page-not-found.component';

const routes: NavigationRoute[] = [
  {
    path: '',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule {}
