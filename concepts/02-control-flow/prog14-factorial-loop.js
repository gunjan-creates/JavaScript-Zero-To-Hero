// Compute a factorial iteratively.
const n = 5;
let product = 1;

for (let i = 2; i <= n; i += 1) {
  product *= i;
}

console.log(`${n}! =`, product);