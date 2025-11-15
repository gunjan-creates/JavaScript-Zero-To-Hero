// Cache function results to avoid repeated work.
function memoize(fn) {
  const cache = new Map();
  return (arg) => {
    if (cache.has(arg)) {
      return cache.get(arg);
    }
    const result = fn(arg);
    cache.set(arg, result);
    return result;
  };
}

const slowDouble = (value) => value * 2;
const fastDouble = memoize(slowDouble);

console.log(fastDouble(10));
console.log(fastDouble(10));