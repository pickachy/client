import { Component, Input } from '@angular/core';
import { Broker, GQLBrokerPayload } from '@core/models/broker.model';


@Component({
  selector: 'app-page-brokers-list',
  templateUrl: './brokers-list.component.html',
  styleUrls: ['./brokers-list.component.scss']
})
export class BrokersListComponent {
  @Input() brokers: Broker[] = [];

  brokerTrackBy(_: number, broker: GQLBrokerPayload) {
    return broker.id;
  }
}
