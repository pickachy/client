import { Component } from '@angular/core';

@Component({
  selector: 'app-header-language-switcher',
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  language = 'RU';

  change(language: string) {
    this.language = language;
  }
}
