import { Component, ElementRef, HostListener } from '@angular/core';
import { NotificationService } from '@shared/services/notifcation.service';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-page-share-menu',
  templateUrl: './share-menu.component.html',
  styleUrls: ['./share-menu.component.scss']
})
export class ShareMenuComponent {
  hidden: boolean = true;
  currentLocation = window.location.href;

  constructor(private eRef: ElementRef, private _notificationService: NotificationService, private _clipboard: Clipboard) {}

  @HostListener('document:click', ['$event'])
  clickOut(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
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
