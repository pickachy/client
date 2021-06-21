export const getReferralSubIdQueryParams = (): string => {
  const utmName = 'utm_source';
  const utmTimestampName = 'utm_timestamp';

  const existedUtm = localStorage.getItem(utmName);
  const existedUtmTimestamp = localStorage.getItem(utmTimestampName);

  let value = 'others';
  if (existedUtmTimestamp && existedUtm) {
    const days = (Date.now() - parseInt(existedUtmTimestamp)) / 1000 / 60 / 60 / 24;
    if (days < 30) {
      value = 'callcenter';
    }
  }

  return `?subid1=${value}`;
};
