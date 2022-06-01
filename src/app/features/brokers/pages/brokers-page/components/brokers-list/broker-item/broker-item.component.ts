import { Component } from '@angular/core';

@Component({
  selector: 'app-page-broker-item',
  templateUrl: './broker-item.component.html',
  styleUrls: ['./broker-item.component.scss']
})
export class BrokerItemComponent {
  hidden: boolean = true;

  onClick(): void {
    this.hidden = !this.hidden;
  }
}
