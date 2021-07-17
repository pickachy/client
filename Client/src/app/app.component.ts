import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isBrowser } from '@shared/tools/environmentUtils';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import { getDaysSinceTimestamp } from '@shared/tools/dateUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  referralParams$?: Observable<{ source: string | null; campaign: string | null; mailingStartDate: string | null } | null>;
  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    const utmSourceKey = 'utm_source';
    const utmCampaignKey = 'utm_campaign';
    const mailingStartDateKey = 'md';
    const utmTimestampKey = 'utm_timestamp';

    this.referralParams$ = this.router.queryParamMap.pipe(
      map((params: ParamMap) => ({
        source: params.get(utmSourceKey),
        campaign: params.get(utmCampaignKey),
        mailingStartDate: params.get(mailingStartDateKey)
      }))
    );

    this.referralParams$.subscribe(utmQueryParams => {
      if (isBrowser) {
        // Getting existed main utms from storage
        const existedUtmSourceName = localStorage.getItem(utmSourceKey);
        const existedUtmTimestamp = localStorage.getItem(utmTimestampKey);

        // If there are incoming utm data in query params, we process it
        if (utmQueryParams && utmQueryParams.source) {
          // Do not process if storage's main utm data valid and is not expired
          if (existedUtmTimestamp && existedUtmSourceName) {
            const days = getDaysSinceTimestamp(Number(existedUtmTimestamp));
            if (days < 30) {
              return;
            }
          }
          localStorage.setItem(utmSourceKey, utmQueryParams.source);
          localStorage.setItem(utmTimestampKey, Date.now().toString());
          if (utmQueryParams.campaign) {
            localStorage.setItem(utmCampaignKey, utmQueryParams.campaign);
          }
          if (utmQueryParams.mailingStartDate) {
            localStorage.setItem(mailingStartDateKey, utmQueryParams.mailingStartDate);
          }
        }
        // If storage contains utm data and it is expired, clean storage
        else {
          // If existed main utm data is expired, clean storage
          if (existedUtmTimestamp && existedUtmSourceName) {
            const days = getDaysSinceTimestamp(Number(existedUtmTimestamp));
            if (days > 30) {
              localStorage.removeItem(utmTimestampKey);
              localStorage.removeItem(utmSourceKey);
              localStorage.removeItem(utmCampaignKey);
              localStorage.removeItem(mailingStartDateKey);
            }
          }
        }
      }
    });
  }
}
