const ONE_SECOND = 1000;
const ONE_MINUTE = ONE_SECOND * 60;
const ONE_HOUR = ONE_MINUTE * 60;
const ONE_DAY = ONE_HOUR * 24;
const ONE_WEEK = ONE_DAY * 7;
const ONE_MONTH = ONE_WEEK * 4.3;

const units = {
  second: ONE_SECOND,
  minute: ONE_MINUTE,
  hour: ONE_HOUR,
  day: ONE_DAY,
  week: ONE_WEEK,
  month: ONE_MONTH
};

type Unit = keyof typeof units | `${keyof typeof units}s`;

/**
 * This will either return the unit
 * If no unit is passed we'll attempt to get the largest one
 */
const resolveUnit = (interval: number, unit?: Unit): keyof typeof units => {
  if (unit) return ((/s$/.test(unit)) ? unit.slice(0, -1) : unit) as keyof typeof units;

  unit = 'second';
  for(const key in units) {
    if(units[key as keyof typeof units] <= interval && units[key as keyof typeof units] > units[unit as keyof typeof units]) {
      unit = key as Unit;
    }
  }

  return unit as keyof typeof units;
}

/**
 * This will round the number up or down.
 */
const roundNumber = (number: number, unit: keyof typeof units) => {
  const result = Math.floor(number / units[unit]);
  const shouldRoundUp = (number % units[unit]) / (units[unit] / 2) > 1;
  if (shouldRoundUp) return result + 1;
  return result;
}

export const intervalToHuman = (interval: number, unit?: Unit) => {
  const resolvedUnit = resolveUnit(interval, unit);
  const result = roundNumber(interval, resolvedUnit);
  return `${result} ${resolvedUnit}${result > 1 ? 's' : ''}`;
};

export default intervalToHuman;