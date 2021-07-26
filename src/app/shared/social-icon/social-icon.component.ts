import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent {
  @Input() styles: {[property: string]: string | number} | null = null;
  @Input() href?: string;
}
