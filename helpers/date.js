import {
  differenceInCalendarDays,
  format,
  formatDistanceToNow,
} from "date-fns";
import { pl } from "date-fns/locale";

export function composeDate(dateString) {
  const date = new Date(dateString);
  const dateFormat = "d MMMM yyyy";

  return format(date, dateFormat, { locale: pl });
}

export function composeFriendlyDate(dateString) {
  const dateTarget = new Date(dateString);
  const dateNow = new Date();

  const isOlderThanYear = differenceInCalendarDays(dateNow, dateTarget) > 365;

  return !isOlderThanYear
    ? formatDistanceToNow(dateTarget, {
        addSuffix: true,
        locale: pl,
      })
    : composeDate(dateString);
}
