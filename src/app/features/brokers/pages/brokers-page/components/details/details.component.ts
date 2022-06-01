import { Component } from '@angular/core';


@Component({
  selector: 'app-page-brokers-components-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {

  markup: 'tariff' | 'general' | 'instruments' = 'tariff';

  onClick(details: 'tariff' | 'general' | 'instruments'): void {
    this.markup = details;
  }
}

