import { Component } from '@angular/core';


@Component({
  selector: 'app-page-brokers-section-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  markup: string = 'tariff'

  onClick(details: string): void {
    this.markup = details;

  }
}

