import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationRoute } from '../models/navigation-route.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  public enhancedMainRoutes: NavigationRoute[];
  public enhancedAdditionalRoutes: NavigationRoute[];
  constructor(router: Router) {
    const enhancedRoutes = this.traverseAndFilterByNameAndEnhance(router.config, undefined);
    this.enhancedMainRoutes = enhancedRoutes.filter(route => !route.isAdditional);
    this.enhancedAdditionalRoutes = enhancedRoutes.filter(route => route.isAdditional);
  }

  private traverseAndFilterByNameAndEnhance = (routes: NavigationRoute[], parent: NavigationRoute | undefined) => {
    const result: NavigationRoute[] = [];
    for (const route of routes) {
      route.fullPath ??= route.path;
      if (parent) {
        route.fullPath = parent.fullPath!.concat('/', route.path!);
      }
      if (route.children) {
        result.push(...this.traverseAndFilterByNameAndEnhance(route.children, route));
      }
      if (route.name) {
        result.push(route);
      }
    }
    return result;
  };
}
