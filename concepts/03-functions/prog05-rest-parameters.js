// Capture a variable number of arguments with rest parameters.
function sumAll(...numbers) {
  return numbers.reduce((total, value) => total + value, 0);
}

console.log(sumAll(1, 2, 3, 4));