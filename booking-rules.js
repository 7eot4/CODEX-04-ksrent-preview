(function exposeBookingRules(root, factory) {
  const rules = factory();
  if (typeof module === "object" && module.exports) module.exports = rules;
  else root.KSRentBookingRules = rules;
})(typeof globalThis !== "undefined" ? globalThis : this, function createRules() {
  const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

  function isIsoDate(value) {
    if (!ISO_DATE.test(value || "")) return false;
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return (
      date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day
    );
  }

  function isValidStay(checkIn, checkOut) {
    return isIsoDate(checkIn) && isIsoDate(checkOut) && checkIn < checkOut;
  }

  function rangesOverlap(firstStart, firstEnd, secondStart, secondEnd) {
    if (
      !isValidStay(firstStart, firstEnd) ||
      !isValidStay(secondStart, secondEnd)
    )
      return false;
    return firstStart < secondEnd && firstEnd > secondStart;
  }

  function activePeriods(periods) {
    return (periods || []).filter(
      (period) =>
        period &&
        !period.cancelled_at &&
        isValidStay(period.check_in, period.check_out),
    );
  }

  function hasConflict(checkIn, checkOut, periods) {
    return activePeriods(periods).some((period) =>
      rangesOverlap(checkIn, checkOut, period.check_in, period.check_out),
    );
  }

  function isOccupied(date, periods) {
    if (!isIsoDate(date)) return false;
    return activePeriods(periods).some(
      (period) => period.check_in <= date && date < period.check_out,
    );
  }

  return { activePeriods, hasConflict, isIsoDate, isOccupied, isValidStay, rangesOverlap };
});
