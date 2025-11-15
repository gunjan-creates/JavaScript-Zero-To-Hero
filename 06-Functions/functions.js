// Functions in JavaScript

console.log("=== FUNCTION DECLARATION ===\n");

// Basic function
function greet() {
  console.log("Hello, World!");
}
greet();

// Function with parameters
function greetPerson(name) {
  console.log("Hello, " + name + "!");
}
greetPerson("John");
greetPerson("Jane");

// Function with return value
function add(a, b) {
  return a + b;
}
const sum = add(5, 3);
console.log("Sum:", sum);

console.log("\n=== FUNCTION EXPRESSION ===\n");

const multiply = function(a, b) {
  return a * b;
};
console.log("Multiply:", multiply(4, 5));

console.log("\n=== ARROW FUNCTIONS ===\n");

// Arrow function with multiple parameters
const subtract = (a, b) => {
  return a - b;
};
console.log("Subtract:", subtract(10, 3));

// Concise arrow function (implicit return)
const square = x => x * x;
console.log("Square of 5:", square(5));

// Arrow function with no parameters
const sayHello = () => "Hello!";
console.log(sayHello());

console.log("\n=== DEFAULT PARAMETERS ===\n");

function greetUser(name = "Guest", greeting = "Hello") {
  console.log(greeting + ", " + name + "!");
}
greetUser("Alice", "Hi");
greetUser("Bob");
greetUser();

console.log("\n=== REST PARAMETERS ===\n");

function sum(...numbers) {
  let total = 0;
  for (let num of numbers) {
    total += num;
  }
  return total;
}
console.log("Sum of 1, 2, 3:", sum(1, 2, 3));
console.log("Sum of 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));

console.log("\n=== CALLBACK FUNCTIONS ===\n");

function processArray(arr, callback) {
  const result = [];
  for (let item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, x => x * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

console.log("\n=== HIGHER-ORDER FUNCTIONS ===\n");

// Function that returns a function
function createMultiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log("Double 5:", double(5));
console.log("Triple 5:", triple(5));

console.log("\n=== IIFE (Immediately Invoked Function Expression) ===\n");

(function() {
  console.log("This function runs immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log("Hello, " + name + "!");
})("JavaScript");

console.log("\n=== SCOPE ===\n");

// Global scope
let globalVar = "I'm global";

function testScope() {
  // Function scope
  let functionVar = "I'm in function scope";
  console.log("Inside function:", globalVar);
  console.log("Inside function:", functionVar);
  
  if (true) {
    // Block scope
    let blockVar = "I'm in block scope";
    console.log("Inside block:", blockVar);
  }
  // console.log(blockVar); // Error: blockVar is not defined
}

testScope();
console.log("Outside function:", globalVar);
// console.log(functionVar); // Error: functionVar is not defined

console.log("\n=== PRACTICAL EXAMPLES ===\n");

// Calculate factorial
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
console.log("Factorial of 5:", factorial(5));

// Check if palindrome
function isPalindrome(str) {
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log("Is 'racecar' a palindrome?", isPalindrome('racecar'));
console.log("Is 'hello' a palindrome?", isPalindrome('hello'));

// Find maximum number
function findMax(...numbers) {
  return Math.max(...numbers);
}
console.log("Max of 3, 7, 2, 9, 1:", findMax(3, 7, 2, 9, 1));

// Filter even numbers
const filterEven = arr => arr.filter(num => num % 2 === 0);
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Original array:", nums);
console.log("Even numbers:", filterEven(nums));
