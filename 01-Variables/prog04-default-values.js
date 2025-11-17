// Demonstrates default values for uninitialized variables
let count;
const DEFAULT_COUNT = 10;

console.log("Initial count:", count); // prints undefined

if (count === undefined) {
  count = DEFAULT_COUNT;
}

console.log("Count after default applied:", count);
