import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-page-share-menu',
  templateUrl: './share-menu.component.html',
  styleUrls: ['./share-menu.component.scss']
})
export class ShareMenuComponent {
  hidden: boolean = true;

  constructor(private eRef: ElementRef) {}

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if(!this.eRef.nativeElement.contains(event.target)) {
      this.hidden = true;
    }
  }

  onClick(): void {
    this.hidden = !this.hidden;
  }

}
