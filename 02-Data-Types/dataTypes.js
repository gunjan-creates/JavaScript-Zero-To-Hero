// Data Types in JavaScript

console.log("=== PRIMITIVE DATA TYPES ===\n");

// 1. String
const stringVar = "Hello, World!";
const stringVar2 = 'Single quotes work too';
const stringVar3 = `Template literal with ${stringVar}`;
console.log("String:", stringVar);
console.log("Template Literal:", stringVar3);
console.log("Type:", typeof stringVar);

// 2. Number
const integerNum = 42;
const floatNum = 3.14;
const negativeNum = -10;
const scientificNum = 5e3; // 5000
console.log("\nNumber:", integerNum);
console.log("Float:", floatNum);
console.log("Scientific:", scientificNum);
console.log("Type:", typeof integerNum);

// 3. Boolean
const isTrue = true;
const isFalse = false;
console.log("\nBoolean true:", isTrue);
console.log("Boolean false:", isFalse);
console.log("Type:", typeof isTrue);

// 4. Undefined
let undefinedVar;
console.log("\nUndefined:", undefinedVar);
console.log("Type:", typeof undefinedVar);

// 5. Null
const nullVar = null;
console.log("\nNull:", nullVar);
console.log("Type:", typeof nullVar); // Note: returns "object" (JavaScript quirk)

// 6. Symbol
const sym1 = Symbol('description');
const sym2 = Symbol('description');
console.log("\nSymbol:", sym1);
console.log("Symbols are unique:", sym1 === sym2); // false
console.log("Type:", typeof sym1);

// 7. BigInt
const bigInt = 1234567890123456789012345678901234567890n;
console.log("\nBigInt:", bigInt);
console.log("Type:", typeof bigInt);

console.log("\n=== NON-PRIMITIVE DATA TYPES ===\n");

// Object
const person = {
  name: "John",
  age: 30,
  isStudent: false
};
console.log("Object:", person);
console.log("Type:", typeof person);

// Array (special type of object)
const numbers = [1, 2, 3, 4, 5];
console.log("\nArray:", numbers);
console.log("Type:", typeof numbers);
console.log("Is Array:", Array.isArray(numbers));

// Function (special type of object)
function greet() {
  return "Hello!";
}
console.log("\nFunction:", greet);
console.log("Type:", typeof greet);

// Type Conversion Examples
console.log("\n=== TYPE CONVERSION ===\n");

// String to Number
const strNum = "123";
console.log("String to Number:", Number(strNum), typeof Number(strNum));

// Number to String
const num = 456;
console.log("Number to String:", String(num), typeof String(num));

// To Boolean
console.log("To Boolean (0):", Boolean(0)); // false
console.log("To Boolean (1):", Boolean(1)); // true
console.log("To Boolean (''):", Boolean("")); // false
console.log("To Boolean ('text'):", Boolean("text")); // true
