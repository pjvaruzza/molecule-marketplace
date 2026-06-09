// Zero-dependency sanity tests for the growth model.
// Run with: npm test
const { simulate, fmtMoney, MODEL_DEFAULTS } = require("../src/model.js");

let passed = 0, failed = 0;
function assert(name, cond) {
  if (cond) { passed++; console.log("  \u2713 " + name); }
  else { failed++; console.error("  \u2717 " + name); }
}

console.log("model.simulate");

const base = simulate(MODEL_DEFAULTS);
assert("returns 24 months of buyer data", base.buyersArr.length === 24);
assert("returns 24 months of revenue data", base.revArr.length === 24);
assert("buyers grow over time", base.finalBuyers > base.buyersArr[0]);
assert("net revenue is positive at defaults", base.net > 0);
assert("gmv exceeds net revenue", base.gmv > base.net);

const noCredit = simulate(Object.assign({}, MODEL_DEFAULTS, { credit: 0 }));
assert("removing credit fee lowers net revenue", noCredit.net < base.net);

const oneProducer = simulate(Object.assign({}, MODEL_DEFAULTS, { prod: 1, buy: 10, vol: 200 }));
assert("supply becomes binding constraint with 1 producer + high demand", oneProducer.supplyCapped === true);

const highChurn = simulate(Object.assign({}, MODEL_DEFAULTS, { churn: 20 }));
assert("high churn reduces final buyers", highChurn.finalBuyers < base.finalBuyers);

const noChurn = simulate(Object.assign({}, MODEL_DEFAULTS, { churn: 0, buy: 3 }));
assert("zero churn reaches critical mass within 24 months", noChurn.critMonth !== null);

console.log("model.fmtMoney");
assert("formats millions", fmtMoney(2500000) === "$2.50M");
assert("formats thousands", fmtMoney(5400) === "$5K");
assert("formats small values", fmtMoney(42) === "$42");

console.log("\n" + passed + " passed, " + failed + " failed");
process.exit(failed === 0 ? 0 : 1);
