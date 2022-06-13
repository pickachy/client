import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-page-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {
  @Input() text?: string;
}
