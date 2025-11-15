// Operators in JavaScript

console.log("=== ARITHMETIC OPERATORS ===\n");

let a = 10;
let b = 3;

console.log("a =", a, ", b =", b);
console.log("Addition (a + b):", a + b);
console.log("Subtraction (a - b):", a - b);
console.log("Multiplication (a * b):", a * b);
console.log("Division (a / b):", a / b);
console.log("Modulus (a % b):", a % b);
console.log("Exponentiation (a ** b):", a ** b);

let c = 5;
console.log("\nOriginal c:", c);
console.log("Increment (c++):", c++); // Returns 5, then increments
console.log("After increment:", c);
console.log("Decrement (c--):", c--); // Returns 6, then decrements
console.log("After decrement:", c);

console.log("\n=== ASSIGNMENT OPERATORS ===\n");

let x = 10;
console.log("Initial x:", x);

x += 5; // x = x + 5
console.log("After x += 5:", x);

x -= 3; // x = x - 3
console.log("After x -= 3:", x);

x *= 2; // x = x * 2
console.log("After x *= 2:", x);

x /= 4; // x = x / 4
console.log("After x /= 4:", x);

console.log("\n=== COMPARISON OPERATORS ===\n");

console.log("5 == '5':", 5 == '5');     // true (loose equality)
console.log("5 === '5':", 5 === '5');   // false (strict equality)
console.log("5 != '5':", 5 != '5');     // false
console.log("5 !== '5':", 5 !== '5');   // true
console.log("10 > 5:", 10 > 5);         // true
console.log("10 < 5:", 10 < 5);         // false
console.log("10 >= 10:", 10 >= 10);     // true
console.log("10 <= 5:", 10 <= 5);       // false

console.log("\n=== LOGICAL OPERATORS ===\n");

let isAdult = true;
let hasLicense = false;

console.log("isAdult:", isAdult, ", hasLicense:", hasLicense);
console.log("AND (isAdult && hasLicense):", isAdult && hasLicense);
console.log("OR (isAdult || hasLicense):", isAdult || hasLicense);
console.log("NOT (!isAdult):", !isAdult);

console.log("\n=== STRING OPERATORS ===\n");

let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log("Concatenation:", fullName);

let greeting = "Hello";
greeting += " World!";
console.log("Concatenation assignment:", greeting);

console.log("\n=== TERNARY OPERATOR ===\n");

let age = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log("Age:", age);
console.log("Can vote?", canVote);

let score = 75;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log("Score:", score, ", Grade:", grade);

console.log("\n=== TYPE OPERATORS ===\n");

console.log("typeof 'hello':", typeof 'hello');
console.log("typeof 42:", typeof 42);
console.log("typeof true:", typeof true);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);
console.log("typeof {}:", typeof {});
console.log("typeof []:", typeof []);
