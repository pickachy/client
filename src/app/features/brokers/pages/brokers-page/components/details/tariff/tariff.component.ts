import { Component, Input } from '@angular/core';
import { GQLBrokerTariffPayload } from '@core/models/broker.model';


@Component({
  selector: 'app-page-brokers-section-tariff',
  templateUrl: './tariff.component.html',
  styleUrls: ['./tariff.component.scss']
})
export class TariffComponent {
  @Input() brokerTariffs!: GQLBrokerTariffPayload[];

  brokerTariffTrackBy(_: number, broker: GQLBrokerTariffPayload) {
    return broker.id;
  }
}
