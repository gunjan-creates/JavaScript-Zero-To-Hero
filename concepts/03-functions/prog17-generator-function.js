// Yield a sequence lazily using a generator.
function* countUp(limit) {
  for (let i = 1; i <= limit; i += 1) {
    yield i;
  }
}

for (const value of countUp(3)) {
  console.log("Generated:", value);
}