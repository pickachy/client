import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isBrowser } from '@shared/tools/environmentUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  utmSource$?: Observable<string | null>;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    const utmName = 'utm_source';
    const utmTimestampName = 'utm_timestamp';
    this.utmSource$ = this.router.queryParamMap.pipe(map((params: ParamMap) => params.get(utmName)));
    this.utmSource$.subscribe(param => {
      if (isBrowser) {
        const existedUtm = localStorage.getItem(utmName);
        const existedUtmTimestamp = localStorage.getItem(utmTimestampName);

        if (param === 'callcenter') {
          if (existedUtmTimestamp && existedUtm) {
            const days = (Date.now() - parseInt(existedUtmTimestamp)) / 1000 / 60 / 60 / 24;
            if (days < 30) {
              return;
            }

            if (days > 30) {
              localStorage.setItem(utmTimestampName, Date.now().toString());
              return;
            }
          }
          localStorage.setItem(utmName, param);
          localStorage.setItem(utmTimestampName, Date.now().toString());
        } else {
          if (existedUtmTimestamp && existedUtm) {
            const days = (Date.now() - parseInt(existedUtmTimestamp)) / 1000 / 60 / 60 / 24;
            if (days > 30) {
              localStorage.removeItem(utmTimestampName);
              localStorage.removeItem(utmName);
            }
          }
        }
      }
    });
  }
}
