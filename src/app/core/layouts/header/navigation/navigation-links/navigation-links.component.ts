import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavigationRoute } from '@core/models/navigation-route.model';

@Component({
  selector: 'app-navigation-links',
  templateUrl: './navigation-links.component.html'
})
export class NavigationLinksComponent {
  @Input() links: NavigationRoute[] = [];
  @Input() activeClass: string | undefined = 'active-navigation-link';
  @Input() linkClassName?: string;
  @Output() clickHandler: EventEmitter<Event> = new EventEmitter<Event>();

  onClickHandler(event: Event){
    this.clickHandler.emit(event);
  }
}
