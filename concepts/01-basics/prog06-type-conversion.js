// Convert between number and string types explicitly.
const num = 42;
const asString = String(num);
const backToNumber = Number(asString);

console.log(typeof num, num);
console.log(typeof asString, asString);
console.log(typeof backToNumber, backToNumber);