// Skip odd numbers with continue inside a loop.
const values = [];

for (let i = 1; i <= 10; i += 1) {
  if (i % 2 !== 0) {
    continue;
  }
  values.push(i);
}

console.log("Even numbers from 1-10:", values);