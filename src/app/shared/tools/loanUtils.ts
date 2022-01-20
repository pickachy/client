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
  const qsConcatChar = link.includes('?') ? '&' : '?';
  const isSubIdLogic = link.includes('cmtrckr') || link.includes('lnkrdrct') || link.includes('aventus.credit-net');
  // link is affiliate network or credit plus. Use subid logic for it
  if (isSubIdLogic) {
    if (isExpired || !existedUtmSource || !existedUtmTimestamp) {
      referralQueryString = `${qsConcatChar}subid1=others`;
    }
    else{
      referralQueryString = `${qsConcatChar}subid1=${existedUtmSource}`;
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
    // credit 7 direct link
    referralQueryString = `${qsConcatChar}utm_term=${isExpired || !existedUtmCampaign ? 'others' : existedUtmCampaign}`;
  }

  return `${link}${referralQueryString}`;
};
