// Test whether all or some items meet a condition.
const marks = [78, 82, 91, 65];

const allPassed = marks.every((score) => score >= 60);
const hasDistinction = marks.some((score) => score >= 85);

console.log({ allPassed, hasDistinction });