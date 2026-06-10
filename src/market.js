// Market map: where each hydrogen supply mode is economic, on a log scale of
// daily draw (kg/day), and the mispriced 50–300 kg/day band the marketplace targets.
// Ranges are planning-grade figures from docs/segment-definition-supply-tiers.md.
// Pure helpers have no DOM access so they can be tested in Node.

const MARKET_CONFIG = {
  LOG_MIN: 0.3,       // kg/day at left edge of the chart
  LOG_MAX: 300000,    // kg/day at right edge of the chart
  WEDGE: [50, 300]    // target band, kg/day
};

const MARKET_MODES = [
  { name: "Cylinders & packs",    range: [0.3, 10],        rangeLabel: "0.3–10",      status: "served",   note: "economic only at trivial volumes" },
  { name: "MicroBulk (liquid)",   range: [1, 12],          rangeLabel: "1–12",        status: "served",   note: "incumbent default — ceiling ≈ 12 kg/day" },
  { name: "Gaseous tube trailer", range: [50, 1000],       rangeLabel: "50–1,000",    status: "wedge",    note: "the only fit for the band — priced as a nuisance" },
  { name: "Bulk liquid (LH₂)",   range: [300, 5000],      rangeLabel: "300–5,000",   status: "served",   note: "boil-off ~3%/day punishes slow draw" },
  { name: "On-site generation",   range: [20, 10000],      rangeLabel: "20–10,000",   status: "served",   note: "pencils only with steady, continuous load" },
  { name: "Pipeline / captive",   range: [10000, 300000],  rangeLabel: "10,000+",          status: "pipeline", note: "refineries & ammonia — the majors’ core business" }
];

// SCFM equivalents are pre-computed (1 kg/day ≈ 0.294 SCFM) so this file stays standalone.
const MARKET_TICKS = [
  { kg: 1, scfm: "0.3" },
  { kg: 10, scfm: "3" },
  { kg: 100, scfm: "29" },
  { kg: 1000, scfm: "290" },
  { kg: 10000, scfm: "2.9k" },
  { kg: 100000, scfm: "29k" }
];

// Position of a kg/day value on the chart, as a percentage of track width.
function marketPct(kg) {
  const lo = Math.log10(MARKET_CONFIG.LOG_MIN);
  const hi = Math.log10(MARKET_CONFIG.LOG_MAX);
  const v = Math.min(Math.max(kg, MARKET_CONFIG.LOG_MIN), MARKET_CONFIG.LOG_MAX);
  return ((Math.log10(v) - lo) / (hi - lo)) * 100;
}

function marketTickLabel(v) {
  return v >= 1000 ? (v / 1000) + "k" : String(v);
}

function renderMarketMap() {
  const root = document.getElementById("market-map");
  if (!root) return;

  const w0 = marketPct(MARKET_CONFIG.WEDGE[0]);
  const w1 = marketPct(MARKET_CONFIG.WEDGE[1]);
  const grid = MARKET_TICKS.map(
    (t) => `<span class="mm-grid" style="left:${marketPct(t.kg)}%"></span>`
  ).join("");
  const stripe = `<span class="mm-stripe" style="left:${w0}%;width:${w1 - w0}%"></span>`;

  let html = `<div class="mm-row" aria-hidden="true">
    <div class="mm-label"></div>
    <div class="mm-track mm-track-head">${grid}${stripe}<span class="mm-cap" style="left:${(w0 + w1) / 2}%">Target band &middot; 50&ndash;300 kg/day <em>&approx; 15&ndash;90 SCFM</em></span></div>
  </div>`;

  MARKET_MODES.forEach((m) => {
    const a = marketPct(m.range[0]);
    const b = marketPct(m.range[1]);
    html += `<div class="mm-row" aria-hidden="true">
      <div class="mm-label"><p class="mm-name">${m.name}</p><p class="mm-note">${m.note}</p></div>
      <div class="mm-track">${grid}${stripe}<span class="mm-bar mm-bar--${m.status}" style="left:${a}%;width:${b - a}%"><span class="mm-range">${m.rangeLabel}</span></span></div>
    </div>`;
  });

  html += `<div class="mm-row" aria-hidden="true">
    <div class="mm-label"><p class="mm-axis-title">kg/day, log scale<br>&approx; SCFM</p></div>
    <div class="mm-track mm-track-axis">${MARKET_TICKS.map(
      (t) => `<span class="mm-tick" style="left:${marketPct(t.kg)}%">${marketTickLabel(t.kg)}<i>${t.scfm}</i></span>`
    ).join("")}</div>
  </div>`;

  html += `<div class="mm-legend">
    <span><i class="mm-sw mm-sw--served"></i>incumbent comfort zone</span>
    <span><i class="mm-sw mm-sw--wedge"></i>our mode (tube trailer)</span>
    <span><i class="mm-sw mm-sw--stripe"></i>mispriced band we target</span>
    <span><i class="mm-sw mm-sw--pipeline"></i>pipeline scale</span>
  </div>`;

  root.innerHTML = html;
}

if (typeof document !== "undefined") renderMarketMap();

// Export for Node test harness while staying browser-global friendly.
if (typeof module !== "undefined" && module.exports) {
  module.exports = { marketPct, marketTickLabel, MARKET_CONFIG, MARKET_MODES, MARKET_TICKS };
}
