import { Component, Input } from '@angular/core';
import { Broker } from '@core/models/broker.model';
import { environment } from '../../../../../../../../environments/environment';

@Component({
  selector: 'app-page-broker-item',
  templateUrl: './broker-item.component.html',
  styleUrls: ['./broker-item.component.scss']
})
export class BrokerItemComponent {
  @Input() broker!: Broker;

  hidden: boolean = true;

  serverAssetsStoragePath = environment.serverAssetsStoragePath;

  onClick(): void {
    this.hidden = !this.hidden;
  }
}
