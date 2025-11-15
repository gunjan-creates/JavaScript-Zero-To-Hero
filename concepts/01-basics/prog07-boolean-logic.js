// Evaluate boolean expressions with logical operators.
const hasTicket = true;
const passedSecurity = false;

const canEnter = hasTicket && passedSecurity;
const needsHelp = !hasTicket || !passedSecurity;

console.log("Can enter:", canEnter);
console.log("Needs assistance:", needsHelp);