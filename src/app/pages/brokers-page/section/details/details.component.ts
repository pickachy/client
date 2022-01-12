import { Component, ElementRef, HostListener } from '@angular/core';


@Component({
  selector: 'app-app-page-brokers-section-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

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
