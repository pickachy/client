import { isBrowser } from '@shared/tools/environmentUtils';
import { getDaysSinceTimestamp } from '@shared/tools/dateUtils';

export const buildReferralLink = (link: string): string | undefined => {
  if (!isBrowser) {
    return '';
  }
  if(!link){
    return undefined;
  }

  let isExpired = false;
  const existedUtmSource = localStorage.getItem('utm_source');
  const existedUtmTimestamp = localStorage.getItem('utm_timestamp');
  const existedUtmCampaign = localStorage.getItem('utm_campaign');
  const existedMailingStartDate = localStorage.getItem('md');

  // Check if utm is expired
  if (existedUtmTimestamp && existedUtmSource) {
    const days = getDaysSinceTimestamp(Number(existedUtmTimestamp));
    if (days > 30) {
      isExpired = true;
    }
  }

  let referralQueryString;
  const isMediatorLink = link.includes('cmtrckr');
  // link is not direct, use subid
  if (isMediatorLink) {
    if (isExpired || !existedUtmSource || !existedUtmTimestamp) {
      referralQueryString = '?subid1=others';
    }
    else{
      referralQueryString = `?subid1=${existedUtmSource}`;
      if (existedUtmCampaign) {
        referralQueryString += `&subid2=${existedUtmCampaign}`;
      }
      if (existedMailingStartDate) {
        referralQueryString += `&subid3=${existedMailingStartDate}`;
      }
    }
  }
  // link is direct, use utm_campaign -> utm_term substitution
  else {
    // now it is only credit 7 direct link
    const qsConcatChar = link.includes('?') ? '&' : '?';

    referralQueryString = `${qsConcatChar}utm_term=${isExpired || !existedUtmCampaign ? 'others' : existedUtmCampaign}`;
  }

  return `${link}${referralQueryString}`;
};
