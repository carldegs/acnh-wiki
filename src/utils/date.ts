import { MONTHS } from '../constants/date';

export const getMonthRange = (monthRangeStr: string) => {
  const seasonsSplit = monthRangeStr.split(' & ').filter((s) => s !== '');

  if (!seasonsSplit.length) {
    return [];
  }

  return seasonsSplit.map((season) => {
    const periodSplit = season.split('-');

    return `${MONTHS[Number(periodSplit[0])]} - ${
      MONTHS[Number(periodSplit[1])]
    }`;
  });
};
