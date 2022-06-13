import { Component, Input } from '@angular/core';
import { Broker } from '@core/models/broker.model';


@Component({
  selector: 'app-page-brokers-section-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  @Input() broker!: Broker;
}
