// Zero-dependency sanity tests for the growth model.
// Run with: npm test
const {
  simulate, fmtMoney, MODEL_DEFAULTS,
  kgPerDayToScfh, kgPerDayToScfm, fmtScfh
} = require("../src/model.js");

let passed = 0, failed = 0;
function assert(name, cond) {
  if (cond) { passed++; console.log("  ✓ " + name); }
  else { failed++; console.error("  ✗ " + name); }
}

console.log("model.simulate");

const base = simulate(MODEL_DEFAULTS);
assert("returns 24 months of buyer data", base.buyersArr.length === 24);
assert("returns 24 months of revenue data", base.revArr.length === 24);
assert("buyers grow over time", base.finalBuyers > base.buyersArr[0]);
assert("net revenue is positive at defaults", base.net > 0);
assert("gmv exceeds net revenue", base.gmv > base.net);
assert("monthly contribution is positive at defaults", base.contribution > 0);
assert("distributor-style take breaks even within 24 months", base.beMonth !== null);

const brokerTake = simulate(Object.assign({}, MODEL_DEFAULTS, { take: 0.5 }));
assert("broker-style $0.50 take never breaks even", brokerTake.beMonth === null);
assert("lower take lowers net revenue", brokerTake.net < base.net);

const leanOpex = simulate(Object.assign({}, MODEL_DEFAULTS, { opex: 30 }));
const heavyOpex = simulate(Object.assign({}, MODEL_DEFAULTS, { opex: 80 }));
assert("higher opex delays break-even", heavyOpex.beMonth > leanOpex.beMonth);

const oneProducer = simulate(Object.assign({}, MODEL_DEFAULTS, { prod: 1, buy: 10, vol: 300 }));
assert("supply becomes binding constraint with 1 producer + high demand", oneProducer.supplyCapped === true);

const highChurn = simulate(Object.assign({}, MODEL_DEFAULTS, { churn: 20 }));
assert("high churn reduces final buyers", highChurn.finalBuyers < base.finalBuyers);

const noChurn = simulate(Object.assign({}, MODEL_DEFAULTS, { churn: 0, buy: 3 }));
assert("zero churn reaches critical mass within 24 months", noChurn.critMonth !== null);

console.log("model.fmtMoney");
assert("formats millions", fmtMoney(2500000) === "$2.50M");
assert("formats thousands", fmtMoney(5400) === "$5K");
assert("formats small values", fmtMoney(42) === "$42");
assert("formats negative values", fmtMoney(-16200) === "-$16K");

console.log("model.units (the customer's language)");
assert("100 kg/day is about 1,763 SCFH", Math.abs(kgPerDayToScfh(100) - 1762.5) < 1);
assert("50 kg/day is about 14.7 SCFM", Math.abs(kgPerDayToScfm(50) - 14.7) < 0.1);
assert("300 kg/day is about 88 SCFM", Math.abs(kgPerDayToScfm(300) - 88.1) < 0.2);
assert("fmtScfh rounds to a quotable flow", fmtScfh(100) === "1,760");

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
