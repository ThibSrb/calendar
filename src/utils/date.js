export const DAY_DURATION = 24 * 60 * 60 * 1000;

export const MONTHS = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];

export const DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];


export function dateInDaySpan(start, duration, date) {
    return dateInTimeSpan(start, duration * DAY_DURATION, date);
}

export function dateInTimeSpan(start, duration, date) {
    return start.getTime() <= date && (start.getTime() + duration) > date;
}

export function weekNumber(date) {
    const targetDate = new Date(date.getFullYear(), 0, 1); // January 1st of the same year
    const daysDiff = Math.floor((date - targetDate) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((daysDiff + 1) / 7);

    return weekNumber;
}

