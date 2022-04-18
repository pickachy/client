import { ChangeDetectionStrategy, Component, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type AdaptTo = 'mobile' | 'desktop';

@Component({
  selector: 'app-adapt',
  templateUrl: './adapt.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdaptComponent implements OnInit, OnDestroy {
  @Input()
  to?: AdaptTo;
  show?: AdaptTo;
  mqList: MediaQueryList;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.mqList = this.isBrowser ? window.matchMedia('(max-width: 833px)') : (undefined as any);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.mqList.addEventListener('change', this.onChange);
    }
    this.onChange(this.mqList);
  }
  ngOnDestroy(): void {
    if (this.isBrowser) {
      this.mqList.removeEventListener('change', this.onChange);
    }
  }

  private readonly onChange = (x: MediaQueryList | MediaQueryListEvent) => {
    let show: AdaptTo | undefined;

    if (!x.matches && this.to === 'desktop') {
      show = 'desktop';
    } else if (x.matches && this.to === 'mobile') {
      show = 'mobile';
    }
    if (this.show !== show) {
      this.show = show;
    }
  };
}
