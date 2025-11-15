// Variables in JavaScript

// 1. var - function scoped
var name = "John";
console.log("Name (var):", name);

// var can be re-declared
var name = "Jane";
console.log("Name (re-declared):", name);

// 2. let - block scoped
let age = 25;
console.log("Age (let):", age);

// let can be updated but not re-declared
age = 26;
console.log("Age (updated):", age);

// 3. const - block scoped, cannot be changed
const PI = 3.14159;
console.log("PI (const):", PI);

// This would cause an error:
// PI = 3.14; // Error!

// Block scope demonstration
{
  let blockScoped = "I'm only visible in this block";
  var functionScoped = "I'm visible outside this block";
  console.log("Inside block:", blockScoped);
}

// console.log(blockScoped); // Error! blockScoped is not defined
console.log("Outside block:", functionScoped); // Works!

// Naming conventions
const firstName = "John"; // camelCase (recommended)
const last_name = "Doe";  // snake_case (less common in JS)
const MAX_SIZE = 100;     // UPPER_CASE for constants

console.log("\nVariable naming examples:");
console.log("First Name:", firstName);
console.log("Last Name:", last_name);
console.log("Max Size:", MAX_SIZE);
