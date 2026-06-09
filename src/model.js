// Growth model for the marketplace cold start.
// Pure functions — no DOM access — so the math can be reasoned about and tested independently.

const MODEL_CONFIG = {
  MONTHS: 24,
  CRIT_BUYERS: 25,          // active buyers at which matching becomes mostly automatic
  KG_PER_PRODUCER: 150,     // assumed available kg/day per signed producer
  RAMP_MONTHS: 3,           // months over which acquisition ramps to full rate
  AVG_DELIVERED_PRICE: 6,   // $/kg assumed delivered molecule price (for GMV, not margin)
  DAYS_PER_YEAR: 365
};

const MODEL_DEFAULTS = {
  prod: 3, buy: 2, vol: 50, spread: 0.5, credit: 0.4, churn: 5
};

// inputs: { prod, buy, vol, spread, credit, churn(%) }
function simulate(inputs) {
  const cfg = MODEL_CONFIG;
  const supplyCap = inputs.prod * cfg.KG_PER_PRODUCER; // kg/day total signed supply
  const churn = inputs.churn / 100;

  let buyers = 0;
  let critMonth = null;
  const buyersArr = [];
  const revArr = [];

  for (let m = 1; m <= cfg.MONTHS; m++) {
    const ramp = Math.min(1, m / cfg.RAMP_MONTHS);
    buyers = buyers * (1 - churn) + inputs.buy * ramp;
    const b = Math.max(0, buyers);

    const demandVol = b * inputs.vol;                 // kg/day demanded
    const deliveredVol = Math.min(demandVol, supplyCap);
    const annualNet = deliveredVol * (inputs.spread + inputs.credit) * cfg.DAYS_PER_YEAR;

    buyersArr.push(Math.round(b * 10) / 10);
    revArr.push(Math.round(annualNet));

    if (critMonth === null && b >= cfg.CRIT_BUYERS) critMonth = m;
  }

  const finalBuyers = buyersArr[cfg.MONTHS - 1];
  const finalDeliveredVol = Math.min(finalBuyers * inputs.vol, supplyCap);
  const gmv = finalDeliveredVol * cfg.AVG_DELIVERED_PRICE * cfg.DAYS_PER_YEAR + revArr[cfg.MONTHS - 1];

  return {
    buyersArr,
    revArr,
    finalBuyers,
    gmv,
    net: revArr[cfg.MONTHS - 1],
    critMonth,
    supplyCapped: finalBuyers * inputs.vol > supplyCap
  };
}

function fmtMoney(n) {
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(2) + "M";
  if (n >= 1e3) return "$" + Math.round(n / 1e3) + "K";
  return "$" + Math.round(n);
}

// Export for Node test harness while staying browser-global friendly.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { simulate, fmtMoney, MODEL_CONFIG, MODEL_DEFAULTS };
}
