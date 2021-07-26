import { Route } from '@angular/router';

export interface NavigationRoute extends Route {
  name?: string;
  fullPath?: string;
  children?: NavigationRoute[];
  isAdditional?: boolean;
}
