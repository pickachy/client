import { Injectable } from '@angular/core';
import { NavigationRoute } from '../../../app-routing.module';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  public getEnhancedNavigationRoutesWithName = (): NavigationRoute[] => {
    return (function traverseAndFilterAndEnhance(routes: NavigationRoute[], parent: NavigationRoute | undefined) {
      const result: NavigationRoute[] = [];
      for (const route of routes) {
        route.fullPath ??= route.path;
        if (parent) {
          route.fullPath = parent.fullPath!.concat('/', route.path!);
        }
        if (route.children) {
          result.push(...traverseAndFilterAndEnhance(route.children, route));
        }
        if (route.name) {
          result.push(route);
        }
      }
      return result;
    })(this.router.config, undefined);
  };
}
