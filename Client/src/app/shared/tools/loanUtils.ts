import { isBrowser } from '@shared/tools/environmentUtils';

export const getReferralSubIdQueryParams = (): string => {
  let subId1 = 'others';
  let subId2 = '';
  let subId3 = '';

  if(!isBrowser){
    return '';
  }
  const utmSourceKey = 'utm_source';
  const utmCampaignKey = 'utm_campaign';
  const mailingStartDate = 'md';
  const utmTimestampKey = 'utm_timestamp';

  const existedUtmSource = localStorage.getItem(utmSourceKey);
  const existedUtmTimestamp = localStorage.getItem(utmTimestampKey);

  // Check if utm is not expired
  if (existedUtmTimestamp && existedUtmSource) {
    const days = (Date.now() - parseInt(existedUtmTimestamp)) / 1000 / 60 / 60 / 24;
    if (days < 30) {
      subId1 = existedUtmSource;
      const existedUtmCampaign = localStorage.getItem(utmCampaignKey);
      if(existedUtmCampaign){
        subId2 = existedUtmCampaign;
      }
      const existedMailingStartDate = localStorage.getItem(mailingStartDate);
      if(existedMailingStartDate){
        subId3 = existedMailingStartDate;
      }
    }
  }

  let resultQueryParams = `?subid1=${subId1}`;
  if(subId2){
    resultQueryParams += `&subid2=${subId2}`;
  }
  if(subId3){
    resultQueryParams += `&subid3=${subId3}`;
  }
  return resultQueryParams;
};
