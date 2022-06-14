import { Component, Input } from '@angular/core';
import { BrokerFeatureType, GQLBrokerFeaturePayload } from '@core/models/broker.model';


@Component({
  selector: 'app-page-brokers-components-pros-and-cons',
  templateUrl: './pros-and-cons.component.html',
  styleUrls: ['./pros-and-cons.component.scss']
})
export class ProsAndConstComponent {
  @Input() features: GQLBrokerFeaturePayload[] = [];
  FeatureType = BrokerFeatureType;

  brokerFeatureTrackBy(_: number, feature: GQLBrokerFeaturePayload) {
    return feature.id;
  }
}
