// Create a function that returns another function.
function multiplier(factor) {
  return function (value) {
    return value * factor;
  };
}

const triple = multiplier(3);
console.log(triple(10));