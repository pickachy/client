import { Component, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-page-broker-item',
  templateUrl: './broker-item.component.html',
  styleUrls: ['./broker-item.component.scss']
})
export class BrokerItemComponent {

  hidden: boolean = true;

  constructor(private eRef: ElementRef) { }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.hidden = true;
    }
  }

  onClick(): void {
    this.hidden = !this.hidden;
  }

}
