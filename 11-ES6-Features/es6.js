// ES6+ Features in JavaScript

console.log("=== LET AND CONST ===\n");

// let - block scoped
let variable = "I can be reassigned";
variable = "New value";
console.log("Let:", variable);

// const - block scoped, cannot be reassigned
const constant = "I cannot be reassigned";
console.log("Const:", constant);

console.log("\n=== ARROW FUNCTIONS ===\n");

// Traditional function
function traditionalAdd(a, b) {
  return a + b;
}

// Arrow function
const arrowAdd = (a, b) => a + b;
const multiply = (a, b) => a * b;

console.log("Traditional add:", traditionalAdd(5, 3));
console.log("Arrow add:", arrowAdd(5, 3));
console.log("Arrow multiply:", multiply(4, 3));

// Arrow function with single parameter
const square = x => x * x;
console.log("Square of 5:", square(5));

// Arrow function with no parameters
const greet = () => "Hello!";
console.log(greet());

console.log("\n=== TEMPLATE LITERALS ===\n");

const name = "John";
const age = 30;

// Old way
console.log("Old way: My name is " + name + " and I am " + age + " years old");

// Template literal
console.log(`Template literal: My name is ${name} and I am ${age} years old`);

// Multi-line strings
const multiLine = `This is
a multi-line
string`;
console.log("Multi-line:", multiLine);

console.log("\n=== DESTRUCTURING ===\n");

// Array destructuring
const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;
console.log("First color:", firstColor);
console.log("Second color:", secondColor);

// Object destructuring
const person = { firstName: "Jane", lastName: "Doe", age: 25 };
const { firstName, lastName, age: personAge } = person;
console.log("Name:", firstName, lastName);
console.log("Age:", personAge);

// Nested destructuring
const user = {
  id: 1,
  name: "Bob",
  address: {
    city: "New York",
    country: "USA"
  }
};
const { name: userName, address: { city } } = user;
console.log("User:", userName, "from", city);

console.log("\n=== SPREAD OPERATOR ===\n");

// Array spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log("Combined arrays:", combined);

// Array copy
const original = [1, 2, 3];
const copy = [...original];
console.log("Original:", original);
console.log("Copy:", copy);

// Object spread
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const mergedObj = { ...obj1, ...obj2 };
console.log("Merged object:", mergedObj);

// Function arguments
const numbers = [5, 3, 8, 1, 9];
console.log("Max number:", Math.max(...numbers));

console.log("\n=== REST PARAMETERS ===\n");

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("Sum of 1, 2, 3, 4, 5:", sum(1, 2, 3, 4, 5));

function logDetails(name, age, ...hobbies) {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Hobbies:", hobbies);
}
logDetails("Alice", 28, "reading", "coding", "hiking");

console.log("\n=== DEFAULT PARAMETERS ===\n");

function greetUser(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}
console.log(greetUser("Alice", "Hi"));
console.log(greetUser("Bob"));
console.log(greetUser());

console.log("\n=== ENHANCED OBJECT LITERALS ===\n");

const x = 10;
const y = 20;

// Shorthand property names
const point = { x, y };
console.log("Point:", point);

// Method shorthand
const calculator = {
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  }
};
console.log("Add:", calculator.add(5, 3));

// Computed property names
const propName = "score";
const game = {
  [propName]: 100,
  [`${propName}Multiplier`]: 2
};
console.log("Game:", game);

console.log("\n=== CLASSES ===\n");

class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  speak() {
    console.log(`${this.name} makes a sound`);
  }

  getInfo() {
    return `${this.name} is a ${this.type}`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Dog");
    this.breed = breed;
  }

  speak() {
    console.log(`${this.name} barks`);
  }

  fetch() {
    console.log(`${this.name} fetches the ball`);
  }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.getInfo());
dog.speak();
dog.fetch();

console.log("\n=== PROMISES ===\n");

const promise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then(result => console.log("Promise resolved:", result))
  .catch(error => console.log("Promise rejected:", error));

console.log("\n=== ARRAY METHODS ===\n");

const nums = [1, 2, 3, 4, 5];

// map
const doubled = nums.map(n => n * 2);
console.log("Doubled:", doubled);

// filter
const evenNums = nums.filter(n => n % 2 === 0);
console.log("Even numbers:", evenNums);

// reduce
const total = nums.reduce((acc, n) => acc + n, 0);
console.log("Total:", total);

// find
const found = nums.find(n => n > 3);
console.log("First number > 3:", found);

// some & every
console.log("Some > 3:", nums.some(n => n > 3));
console.log("All > 0:", nums.every(n => n > 0));

console.log("\n=== FOR...OF LOOP ===\n");

const fruits = ["apple", "banana", "orange"];
console.log("Fruits:");
for (const fruit of fruits) {
  console.log("-", fruit);
}

// With entries
console.log("\nWith index:");
for (const [index, fruit] of fruits.entries()) {
  console.log(`${index + 1}. ${fruit}`);
}

console.log("\n=== SYMBOLS ===\n");

const sym1 = Symbol("description");
const sym2 = Symbol("description");
console.log("Symbols are unique:", sym1 === sym2); // false
console.log("Symbol:", sym1.toString());

// Symbol as object key
const uniqueKey = Symbol("id");
const objWithSymbol = {
  [uniqueKey]: 123,
  name: "Test"
};
console.log("Object with symbol key:", objWithSymbol[uniqueKey]);

console.log("\n=== OPTIONAL CHAINING (ES2020) ===\n");

const userProfile = {
  name: "John",
  address: {
    city: "New York"
  }
};

console.log("City:", userProfile?.address?.city);
console.log("Street:", userProfile?.address?.street); // undefined instead of error

console.log("\n=== NULLISH COALESCING (ES2020) ===\n");

const value1 = null ?? "default";
const value2 = undefined ?? "default";
const value3 = 0 ?? "default"; // 0 is not nullish
const value4 = "" ?? "default"; // "" is not nullish

console.log("null ??:", value1);
console.log("undefined ??:", value2);
console.log("0 ??:", value3);
console.log("'' ??:", value4);
