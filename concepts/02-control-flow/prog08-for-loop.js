// Iterate with a classic for loop to build a multiplication table row.
const multiplier = 7;
const row = [];

for (let i = 1; i <= 10; i += 1) {
  row.push(multiplier * i);
}

console.log(row);