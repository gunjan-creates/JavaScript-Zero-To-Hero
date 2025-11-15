// Remember state between calls using closures.
function createCounter(start = 0) {
  let current = start;
  return () => {
    current += 1;
    return current;
  };
}

const counter = createCounter();
console.log(counter());
console.log(counter());