// Zero-dependency sanity tests for the market-map data and scale math.
// Run with: npm test
const { marketPct, marketTickLabel, MARKET_CONFIG, MARKET_MODES, MARKET_TICKS } = require("../src/market.js");

let passed = 0, failed = 0;
function assert(name, cond) {
  if (cond) { passed++; console.log("  ✓ " + name); }
  else { failed++; console.error("  ✗ " + name); }
}

console.log("market.marketPct");
assert("left edge maps to 0%", marketPct(MARKET_CONFIG.LOG_MIN) === 0);
assert("right edge maps to 100%", marketPct(MARKET_CONFIG.LOG_MAX) === 100);
assert("scale is monotonic", marketPct(10) < marketPct(100) && marketPct(100) < marketPct(1000));
assert("values below domain clamp to 0%", marketPct(0.001) === 0);
assert("values above domain clamp to 100%", marketPct(1e9) === 100);

console.log("market.data");
const wedge = MARKET_CONFIG.WEDGE;
const trailer = MARKET_MODES.find((m) => m.status === "wedge");
assert("exactly one mode is the wedge mode", MARKET_MODES.filter((m) => m.status === "wedge").length === 1);
assert("target band sits inside the tube-trailer range",
  trailer.range[0] <= wedge[0] && wedge[1] <= trailer.range[1]);
const microbulk = MARKET_MODES.find((m) => m.name.indexOf("MicroBulk") === 0);
assert("gap exists: MicroBulk ceiling is below the target band", microbulk.range[1] < wedge[0]);
const pipeline = MARKET_MODES.find((m) => m.status === "pipeline");
assert("pipeline scale starts far above the target band", pipeline.range[0] >= wedge[1] * 10);
assert("all mode ranges fit the chart domain", MARKET_MODES.every(
  (m) => m.range[0] >= MARKET_CONFIG.LOG_MIN && m.range[1] <= MARKET_CONFIG.LOG_MAX && m.range[0] < m.range[1]
));
assert("all ticks fit the chart domain", MARKET_TICKS.every(
  (t) => t.kg >= MARKET_CONFIG.LOG_MIN && t.kg <= MARKET_CONFIG.LOG_MAX
));
assert("all ticks carry a customer-units (SCFM) label", MARKET_TICKS.every(
  (t) => typeof t.scfm === "string" && t.scfm.length > 0
));

console.log("market.marketTickLabel");
assert("formats sub-thousand values plainly", marketTickLabel(100) === "100");
assert("formats thousands as k", marketTickLabel(10000) === "10k");

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
