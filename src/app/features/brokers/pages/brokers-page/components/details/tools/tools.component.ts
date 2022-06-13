import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-page-brokers-section-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  @Input() text?: string;
  @Input() hint?: string;
}
