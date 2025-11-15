// Compose functions to build complex behavior from simple parts.
const increment = (value) => value + 1;
const triple = (value) => value * 3;

const compose = (a, b) => (value) => a(b(value));

const tripleThenIncrement = compose(increment, triple);
console.log(tripleThenIncrement(4));