const monthsGeneric=[
  'Января',
  'Февраля',
  'Марта',
  'Апреля',
  'Мая',
  'Июня',
  'Июля',
  'Августа',
  'Сентября',
  'Ноября',
  'Декабря'
];

export const getDateDayWithMonthGeneric = (date: Date): string => {
  const month = date.getMonth();
  const day = date.getDate().toString().padStart(2, '0');
  return `${day} ${monthsGeneric[month]}`;
};

export const addDays = (date: Date, days: number): Date => {
  const result = new Date();
  result.setDate(date.getDate() + days);
  return result;
};

export const getCurrentDate = (): string => {
  const today = new Date();

  const month = (today.getMonth()+1).toString().padStart(2, '0');
  const year = today.getFullYear().toString().padStart(2, '0');
  const day = today.getDate().toString().padStart(2, '0');

  return `${day}.${month}.${year}`;
};

export const getDaysSinceTimestamp = (timestamp: number) => {
  return (Date.now() - timestamp) / 1000 / 60 / 60 / 24;
};

export const getDateTimeString = (date: Date): string => {
  const month = (date.getMonth()+1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${day}.${month}.${year} ${hours}:${minutes}`;
};
