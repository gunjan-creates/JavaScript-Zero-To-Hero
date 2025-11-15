// Loops in JavaScript

console.log("=== FOR LOOP ===\n");

// Basic for loop
console.log("Counting from 1 to 5:");
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// For loop with array
const fruits = ["Apple", "Banana", "Orange", "Mango"];
console.log("\nFruits:");
for (let i = 0; i < fruits.length; i++) {
  console.log(i + 1 + ".", fruits[i]);
}

console.log("\n=== WHILE LOOP ===\n");

let count = 1;
console.log("Counting with while loop:");
while (count <= 5) {
  console.log(count);
  count++;
}

// While loop with condition
let sum = 0;
let num = 1;
while (num <= 10) {
  sum += num;
  num++;
}
console.log("\nSum of numbers 1 to 10:", sum);

console.log("\n=== DO...WHILE LOOP ===\n");

let number = 1;
console.log("Do-while loop:");
do {
  console.log(number);
  number++;
} while (number <= 5);

// Do-while executes at least once
let x = 10;
console.log("\nDo-while with false condition:");
do {
  console.log("Executed once even though condition is false");
  x++;
} while (x < 10);

console.log("\n=== FOR...IN LOOP ===\n");

const person = {
  name: "John",
  age: 30,
  city: "New York",
  profession: "Developer"
};

console.log("Person object properties:");
for (let key in person) {
  console.log(key + ":", person[key]);
}

// for...in with array (not recommended)
const colors = ["Red", "Green", "Blue"];
console.log("\nArray indices with for...in:");
for (let index in colors) {
  console.log(index, "->", colors[index]);
}

console.log("\n=== FOR...OF LOOP ===\n");

// for...of with array
const numbers = [10, 20, 30, 40, 50];
console.log("Array values with for...of:");
for (let value of numbers) {
  console.log(value);
}

// for...of with string
const text = "Hello";
console.log("\nString characters:");
for (let char of text) {
  console.log(char);
}

console.log("\n=== BREAK STATEMENT ===\n");

console.log("Breaking loop at 5:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    console.log("Breaking at", i);
    break;
  }
  console.log(i);
}

console.log("\n=== CONTINUE STATEMENT ===\n");

console.log("Skipping even numbers:");
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i);
}

console.log("\n=== NESTED LOOPS ===\n");

console.log("Multiplication table (3x3):");
for (let i = 1; i <= 3; i++) {
  let row = "";
  for (let j = 1; j <= 3; j++) {
    row += (i * j) + "\t";
  }
  console.log(row);
}

console.log("\n=== PRACTICAL EXAMPLES ===\n");

// Find first even number
const nums = [1, 3, 5, 8, 9, 10];
console.log("Array:", nums);
for (let num of nums) {
  if (num % 2 === 0) {
    console.log("First even number:", num);
    break;
  }
}

// Sum all numbers in array
const values = [10, 20, 30, 40, 50];
let total = 0;
for (let value of values) {
  total += value;
}
console.log("\nArray:", values);
console.log("Sum:", total);

// Reverse a string
const originalString = "JavaScript";
let reversedString = "";
for (let i = originalString.length - 1; i >= 0; i--) {
  reversedString += originalString[i];
}
console.log("\nOriginal:", originalString);
console.log("Reversed:", reversedString);
