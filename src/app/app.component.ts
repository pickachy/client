import { Component, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isBrowser } from '@shared/tools/environmentUtils';
import { getDaysSinceTimestamp } from '@shared/tools/dateUtils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private _router: Router) {}

  ngOnInit(): void {
    if (!isBrowser)
      return;

    const subscription$ = this._router.events.pipe(filter((event: any) => event instanceof ActivationEnd)).subscribe((event: ActivationEnd) => {
      const utmSourceQueryParamKey = 'utm_source';
      const utmCampaignQueryParamKey = 'utm_campaign';
      const mailingStartDateQueryParamKey = 'md';

      const utmTimestampLocalStorageKey = 'utm_timestamp';

      const utmQueryParams = {
        source: event.snapshot.queryParamMap.get(utmSourceQueryParamKey),
        campaign: event.snapshot.queryParamMap.get(utmCampaignQueryParamKey),
        mailingStartDate: event.snapshot.queryParamMap.get(mailingStartDateQueryParamKey)
      };

      // Getting existed main utms from storage
      const existedUtmSourceName = localStorage.getItem(utmSourceQueryParamKey);
      const existedUtmTimestamp = localStorage.getItem(utmTimestampLocalStorageKey);

      // If there are incoming utm data in query params, we process it
      if (utmQueryParams && utmQueryParams.source) {
        // Do not process if storage's main utm data valid and is not expired
        if (existedUtmTimestamp && existedUtmSourceName) {
          const days = getDaysSinceTimestamp(Number(existedUtmTimestamp));
          if (days < 30) {
            return;
          }
        }
        localStorage.setItem(utmSourceQueryParamKey, utmQueryParams.source);
        localStorage.setItem(utmTimestampLocalStorageKey, Date.now().toString());
        if (utmQueryParams.campaign) {
          localStorage.setItem(utmCampaignQueryParamKey, utmQueryParams.campaign);
        }
        if (utmQueryParams.mailingStartDate) {
          localStorage.setItem(mailingStartDateQueryParamKey, utmQueryParams.mailingStartDate);
        }
      }
      // If storage contains utm data and it is expired, clean storage
      else {
        // If existed main utm data is expired, clean storage
        if (existedUtmTimestamp && existedUtmSourceName) {
          const days = getDaysSinceTimestamp(Number(existedUtmTimestamp));
          if (days > 30) {
            localStorage.removeItem(utmTimestampLocalStorageKey);
            localStorage.removeItem(utmSourceQueryParamKey);
            localStorage.removeItem(utmCampaignQueryParamKey);
            localStorage.removeItem(mailingStartDateQueryParamKey);
          }
        }
      }
      subscription$.unsubscribe();
    });
  }
}
