import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isBrowser } from '@shared/tools/environmentUtils';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  utmSource$?: Observable<{ source: string | null; campaign: string | null } | null>;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    const utmSourceKey = 'utm_source';
    const utmCampaignKey = 'utm_campaign';
    const utmTimestampKey = 'utm_timestamp';

    this.utmSource$ = this.router.queryParamMap.pipe(
      map((params: ParamMap) => ({
        source: params.get(utmSourceKey),
        campaign: params.get(utmCampaignKey)
      }))
    );

    this.utmSource$.subscribe(utmQueryParams => {
      if (isBrowser) {
        // Getting existed main utms from storage
        const existedUtmSourceName = localStorage.getItem(utmSourceKey);
        const existedUtmTimestamp = localStorage.getItem(utmTimestampKey);

        // If there are incoming utm data in query params, we process it
        if (utmQueryParams && utmQueryParams.source) {
          // Do not process if storage's utm data is not expired
          if (existedUtmTimestamp && existedUtmSourceName) {
            const days = (Date.now() - parseInt(existedUtmTimestamp)) / 1000 / 60 / 60 / 24;
            if (days < 30) {
              return;
            }
          }
          localStorage.setItem(utmSourceKey, utmQueryParams.source);
          localStorage.setItem(utmTimestampKey, Date.now().toString());
          if (utmQueryParams.campaign) {
            localStorage.setItem(utmCampaignKey, utmQueryParams.campaign);
          }
        }
        // If storage contains utm data and it is expired, clean storage
        else {
          if (existedUtmTimestamp && existedUtmSourceName) {
            const days = (Date.now() - parseInt(existedUtmTimestamp)) / 1000 / 60 / 60 / 24;
            if (days > 30) {
              localStorage.removeItem(utmTimestampKey);
              localStorage.removeItem(utmSourceKey);
              localStorage.removeItem(utmCampaignKey);
            }
          }
        }
      }
    });
  }
}
