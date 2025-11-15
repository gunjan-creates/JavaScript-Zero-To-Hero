// Generate a random integer in a specific range.
const min = 1;
const max = 6;
const roll = Math.floor(Math.random() * (max - min + 1)) + min;

console.log(`Rolled a ${roll} on a ${min}-${max} die.`);