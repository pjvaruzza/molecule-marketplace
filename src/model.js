// Growth model for the marketplace cold start.
// Pure functions — no DOM access — so the math can be reasoned about and tested independently.
// Economics follow docs/unit-economics-v2.md: principal-reseller pricing (net take $/kg on a
// ~$9/kg delivered price), 50–300 kg/day accounts, opex-based break-even.

const MODEL_CONFIG = {
  MONTHS: 24,
  CRIT_BUYERS: 25,          // active buyers at which matching becomes mostly automatic
  KG_PER_PRODUCER: 500,     // committed kg/day per signed producer LOI (conservative slice of a chlor-alkali stream)
  RAMP_MONTHS: 3,           // months over which acquisition ramps to full rate
  AVG_DELIVERED_PRICE: 9,   // $/kg delivered sell price (GMV basis) — v2 base case, range $7.50–10.50
  DAYS_PER_YEAR: 365,
  DAYS_PER_MONTH: 30.4
};

const MODEL_DEFAULTS = {
  prod: 3, buy: 2, vol: 100, take: 2.5, opex: 55, churn: 5
};

// inputs: { prod, buy, vol(kg/day), take($/kg), opex($K/mo), churn(%) }
function simulate(inputs) {
  const cfg = MODEL_CONFIG;
  const supplyCap = inputs.prod * cfg.KG_PER_PRODUCER; // kg/day total signed supply
  const churn = inputs.churn / 100;
  const opexMo = inputs.opex * 1000;

  let buyers = 0;
  let critMonth = null;
  let beMonth = null;
  const buyersArr = [];
  const revArr = [];

  for (let m = 1; m <= cfg.MONTHS; m++) {
    const ramp = Math.min(1, m / cfg.RAMP_MONTHS);
    buyers = buyers * (1 - churn) + inputs.buy * ramp;
    const b = Math.max(0, buyers);

    const demandVol = b * inputs.vol;                 // kg/day demanded
    const deliveredVol = Math.min(demandVol, supplyCap);
    const annualNet = deliveredVol * inputs.take * cfg.DAYS_PER_YEAR;
    const monthlyNet = deliveredVol * inputs.take * cfg.DAYS_PER_MONTH;

    buyersArr.push(Math.round(b * 10) / 10);
    revArr.push(Math.round(annualNet));

    if (critMonth === null && b >= cfg.CRIT_BUYERS) critMonth = m;
    if (beMonth === null && monthlyNet >= opexMo) beMonth = m;
  }

  const finalBuyers = buyersArr[cfg.MONTHS - 1];
  const finalDeliveredVol = Math.min(finalBuyers * inputs.vol, supplyCap);
  const gmv = finalDeliveredVol * cfg.AVG_DELIVERED_PRICE * cfg.DAYS_PER_YEAR;
  const contribution = finalDeliveredVol * inputs.take * cfg.DAYS_PER_MONTH - opexMo;

  return {
    buyersArr,
    revArr,
    finalBuyers,
    gmv,
    net: revArr[cfg.MONTHS - 1],
    contribution,             // monthly contribution at month 24, $
    critMonth,
    beMonth,
    supplyCapped: finalBuyers * inputs.vol > supplyCap
  };
}

function fmtMoney(n) {
  const sign = n < 0 ? "-" : "";
  const a = Math.abs(n);
  if (a >= 1e6) return sign + "$" + (a / 1e6).toFixed(2) + "M";
  if (a >= 1e3) return sign + "$" + Math.round(a / 1e3) + "K";
  return sign + "$" + Math.round(a);
}

// ---------- Unit conversions: the customer's language ----------
// The gas industry quotes flow in SCF, not kilograms. 1 kg H2 ≈ 423 SCF ≈ 11.13 Nm³.
const SCF_PER_KG = 423;

function kgPerDayToScfh(kg) { return (kg * SCF_PER_KG) / 24; }
function kgPerDayToScfm(kg) { return kgPerDayToScfh(kg) / 60; }

// Format an SCFH flow the way a buyer would say it (rounded to the nearest 10).
function fmtScfh(kgPerDay) {
  return (Math.round(kgPerDayToScfh(kgPerDay) / 10) * 10).toLocaleString("en-US");
}

// Export for Node test harness while staying browser-global friendly.
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    simulate, fmtMoney, MODEL_CONFIG, MODEL_DEFAULTS,
    SCF_PER_KG, kgPerDayToScfh, kgPerDayToScfm, fmtScfh
  };
}
