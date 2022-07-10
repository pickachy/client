import { isBrowser } from '@shared/tools/environmentUtils';
import { getDaysSinceTimestamp } from '@shared/tools/dateUtils';

export const buildReferralLink = (link: string): string | undefined => {
  if (!isBrowser || !link) {
    return '';
  }

  const defaultValue = 'others';
  const utmSourcePattern = '{{utm_source}}';
  const utmCampaignPattern = '{{utm_campaign}}';
  const mdPattern = '{{md}}';
  let isExpired = false;

  const existedUtmSource = localStorage.getItem('utm_source');

  if(!existedUtmSource){
    return link
      .replace(utmSourcePattern, defaultValue)
      .replace(utmCampaignPattern, defaultValue)
      .replace(mdPattern, defaultValue);
  }

  const existedUtmTimestamp = localStorage.getItem('utm_timestamp');

  // Check if utm is expired
  if (existedUtmTimestamp) {
    const days = getDaysSinceTimestamp(Number(existedUtmTimestamp));
    if (days > 30) {
      isExpired = true;
    }
  }

  if(isExpired){
    return link
      .replace(utmSourcePattern, defaultValue)
      .replace(utmCampaignPattern, defaultValue)
      .replace(mdPattern, defaultValue);
  }

  const existedUtmCampaign = localStorage.getItem('utm_campaign');
  const existedMailingStartDate = localStorage.getItem('md');

  return link
    .replace(utmSourcePattern, existedUtmSource)
    .replace(utmCampaignPattern, existedUtmCampaign ?? '')
    .replace(mdPattern, existedMailingStartDate ?? '');
};
