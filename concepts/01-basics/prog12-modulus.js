// Use modulus to determine even or odd numbers.
const numbers = [3, 4, 7, 10];
const parity = numbers.map((value) => ({ value, isEven: value % 2 === 0 }));

console.log(parity);