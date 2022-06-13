import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { isBrowser } from '@shared/tools';

export type AdaptTo = 'mobile' | 'tablet' | 'desktop';

@Component({
  selector: 'app-adapt',
  templateUrl: './adapt.component.html'
})
export class AdaptComponent implements OnInit, OnDestroy {
  @Input()
  to?: AdaptTo[];

  show: boolean = false;
  checkTablet: MediaQueryList;
  checkDesktop: MediaQueryList;
  isBrowser: boolean = isBrowser;

  constructor() {
    this.checkTablet = isBrowser ? window.matchMedia('(min-width: 768px) and (max-width: 992px') : (undefined as any);
    this.checkDesktop = isBrowser ? window.matchMedia('(min-width: 992px') : (undefined as any);
  }

  ngOnInit(): void {
    if (isBrowser) {
      this.checkTablet.addEventListener('change', this.onChange);
      this.checkDesktop.addEventListener('change', this.onChange);

      this.onChange();
    }
  }
  ngOnDestroy(): void {
    if (isBrowser) {
      this.checkTablet.removeEventListener('change', this.onChange);
      this.checkDesktop.removeEventListener('change', this.onChange);
    }
  }

  private readonly onChange = (_x?: MediaQueryList | MediaQueryListEvent) => {
    let show: boolean = false;

    /* mobile suits if tablet and desktop are not passed*/
    if (this.checkTablet.matches && this.to?.includes('tablet') ||
      this.checkDesktop.matches && this.to?.includes('desktop') ||
      (!this.checkTablet.matches && !this.checkDesktop.matches && this.to?.includes('mobile'))) {
      show =true;
    }

    if (this.show !== show) {
      this.show = show;
    }
  };
}
