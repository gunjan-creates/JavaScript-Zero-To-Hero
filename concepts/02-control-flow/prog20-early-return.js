// Exit a function early when detecting invalid state.
function divide(a, b) {
  if (b === 0) {
    console.log("Cannot divide by zero.");
    return null;
  }
  return a / b;
}

console.log(divide(10, 2));
console.log(divide(10, 0));