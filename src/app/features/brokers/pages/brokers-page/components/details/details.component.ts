import { Component, Input } from '@angular/core';
import { Broker } from '@core/models/broker.model';


@Component({
  selector: 'app-page-brokers-components-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Input() broker!: Broker;

  markup: 'tariff' | 'general' | 'instruments' = 'tariff';

  onClick(details: 'tariff' | 'general' | 'instruments'): void {
    this.markup = details;
  }
}

