import { ChangeDetectionStrategy, Component, ElementRef, HostListener, Inject, Optional } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';
import { NotificationService } from '@core/services/notifcation.service';
import { Router } from '@angular/router';
import { isBrowser } from '@shared/tools';

@Component({
  selector: 'app-page-share-menu',
  templateUrl: './share-menu.component.html',
  styleUrls: ['./share-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ShareMenuComponent {
  hidden: boolean = true;
  currentLocation: string;

  constructor(
    private _router: Router,
    private _eRef: ElementRef,
    private _notificationService: NotificationService,
    private _clipboard: Clipboard,
    @Inject('HOST') @Optional() private hostUrl?: string
  ) {
    //if ssr use injection else browser's location
    this.currentLocation = isBrowser ? window.location.href : hostUrl + _router.url;
  }

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this._eRef.nativeElement.contains(event.target)) {
      this.hidden = true;
    }
  }

  onClick(): void {
    this.hidden = !this.hidden;
  }

  copyToClipboard(event: MouseEvent, text: string) {
    this._clipboard.copy(text);
    this._notificationService.success('Ссылка на статью скопирована');
    this.hidden = true;
  }
}
