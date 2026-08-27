(function exposePricingRules(root, factory) {
  const pricingRules = factory();
  if (typeof module === "object" && module.exports) module.exports = pricingRules;
  else root.MareLentoPricingRules = pricingRules;
})(typeof globalThis !== "undefined" ? globalThis : this, function createPricingRules() {
  const DAY_MS = 86_400_000;
  const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;
  const DEFAULT_CONFIG = Object.freeze({
    currency: "EUR",
    includedGuests: 2,
    extraGuestNightly: 10,
    cleaningFee: 45,
    weekendMultiplier: 1.08,
    weeklyDiscount: 0.05,
    longStayDiscount: 0.1,
    seasonalAnchors: Object.freeze([
      Object.freeze({ month: 1, day: 15, rate: 62 }),
      Object.freeze({ month: 2, day: 15, rate: 62 }),
      Object.freeze({ month: 3, day: 15, rate: 68 }),
      Object.freeze({ month: 4, day: 15, rate: 76 }),
      Object.freeze({ month: 5, day: 15, rate: 86 }),
      Object.freeze({ month: 6, day: 15, rate: 105 }),
      Object.freeze({ month: 7, day: 15, rate: 128 }),
      Object.freeze({ month: 8, day: 15, rate: 145 }),
      Object.freeze({ month: 9, day: 15, rate: 105 }),
      Object.freeze({ month: 10, day: 15, rate: 78 }),
      Object.freeze({ month: 11, day: 15, rate: 64 }),
      Object.freeze({ month: 12, day: 15, rate: 68 }),
    ]),
  });

  function dateFromKey(value) {
    if (!ISO_DATE.test(value || "")) return null;
    const [year, month, day] = value.split("-").map(Number);
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year &&
      date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day
      ? date
      : null;
  }

  function normalizedConfig(input = {}) {
    const config = { ...DEFAULT_CONFIG, ...input };
    const anchors = Array.isArray(input.seasonalAnchors)
      ? input.seasonalAnchors
      : DEFAULT_CONFIG.seasonalAnchors;
    if (anchors.length < 2) throw new Error("At least two seasonal anchors are required.");
    config.seasonalAnchors = anchors
      .map((anchor) => ({
        month: Number(anchor.month),
        day: Number(anchor.day),
        rate: Number(anchor.rate),
      }))
      .sort((first, second) => first.month - second.month || first.day - second.day);
    if (config.seasonalAnchors.some((anchor) =>
      !Number.isInteger(anchor.month) || anchor.month < 1 || anchor.month > 12 ||
      !Number.isInteger(anchor.day) || anchor.day < 1 || anchor.day > 31 ||
      !Number.isFinite(anchor.rate) || anchor.rate <= 0))
      throw new Error("Seasonal pricing anchors are invalid.");
    for (const key of ["includedGuests", "extraGuestNightly", "cleaningFee", "weekendMultiplier", "weeklyDiscount", "longStayDiscount"])
      if (!Number.isFinite(Number(config[key]))) throw new Error(`Invalid pricing field: ${key}.`);
    return config;
  }

  function anchorDate(year, anchor) {
    return new Date(Date.UTC(year, anchor.month - 1, anchor.day));
  }

  function interpolatedSeasonalRate(date, config) {
    const year = date.getUTCFullYear();
    const anchors = config.seasonalAnchors.flatMap((anchor) => [
      { date: anchorDate(year - 1, anchor), rate: anchor.rate },
      { date: anchorDate(year, anchor), rate: anchor.rate },
      { date: anchorDate(year + 1, anchor), rate: anchor.rate },
    ]).sort((first, second) => first.date - second.date);
    const nextIndex = anchors.findIndex((anchor) => anchor.date >= date);
    const next = anchors[nextIndex];
    const previous = anchors[Math.max(0, nextIndex - 1)];
    if (!previous || !next || previous.date.getTime() === next.date.getTime()) return next?.rate || previous?.rate;
    const progress = (date - previous.date) / (next.date - previous.date);
    return previous.rate + (next.rate - previous.rate) * progress;
  }

  function calculateStayPrice(checkIn, checkOut, guests, inputConfig = {}) {
    const start = dateFromKey(checkIn);
    const end = dateFromKey(checkOut);
    const guestCount = Number(guests);
    if (!start || !end || start >= end) throw new Error("A valid [check-in, check-out) range is required.");
    if (!Number.isInteger(guestCount) || guestCount < 1 || guestCount > 4)
      throw new Error("Guest count must be an integer from 1 to 4.");

    const config = normalizedConfig(inputConfig);
    const nights = Math.round((end - start) / DAY_MS);
    const extraGuests = Math.max(0, guestCount - Number(config.includedGuests));
    let accommodationBeforeDiscount = 0;
    const nightlyRates = [];

    for (let offset = 0; offset < nights; offset += 1) {
      const night = new Date(start.getTime() + offset * DAY_MS);
      const weekendMultiplier = [5, 6].includes(night.getUTCDay())
        ? Number(config.weekendMultiplier)
        : 1;
      const nightlyRate = (
        interpolatedSeasonalRate(night, config) +
        extraGuests * Number(config.extraGuestNightly)
      ) * weekendMultiplier;
      nightlyRates.push(Math.round(nightlyRate * 100) / 100);
      accommodationBeforeDiscount += nightlyRate;
    }

    const discountRate = nights >= 14
      ? Number(config.longStayDiscount)
      : nights >= 7
        ? Number(config.weeklyDiscount)
        : 0;
    const discount = accommodationBeforeDiscount * discountRate;
    const accommodation = accommodationBeforeDiscount - discount;
    const total = accommodation + Number(config.cleaningFee);

    return Object.freeze({
      currency: String(config.currency || "EUR"),
      nights,
      guests: guestCount,
      nightlyRates: Object.freeze(nightlyRates),
      accommodationBeforeDiscount: Math.round(accommodationBeforeDiscount),
      discountRate,
      discount: Math.round(discount),
      accommodation: Math.round(accommodation),
      cleaningFee: Math.round(Number(config.cleaningFee)),
      total: Math.round(total),
    });
  }

  return { DEFAULT_CONFIG, calculateStayPrice, dateFromKey, interpolatedSeasonalRate, normalizedConfig };
});
