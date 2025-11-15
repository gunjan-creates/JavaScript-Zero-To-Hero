// Objects in JavaScript

console.log("=== CREATING OBJECTS ===\n");

// Object literal
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  isStudent: false
};
console.log("Person:", person);

// Object constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
car.year = 2022;
console.log("Car:", car);

console.log("\n=== ACCESSING PROPERTIES ===\n");

// Dot notation
console.log("First Name:", person.firstName);
console.log("Age:", person.age);

// Bracket notation
console.log("Last Name:", person["lastName"]);
console.log("Is Student:", person["isStudent"]);

// Dynamic property access
const property = "age";
console.log("Dynamic access:", person[property]);

console.log("\n=== MODIFYING PROPERTIES ===\n");

console.log("Original person:", person);
person.age = 31;
person.city = "New York";
console.log("Modified person:", person);

// Delete property
delete person.isStudent;
console.log("After deleting isStudent:", person);

console.log("\n=== OBJECT METHODS ===\n");

const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  },
  // Shorthand method syntax
  multiply(a, b) {
    return a * b;
  }
};

console.log("Add:", calculator.add(5, 3));
console.log("Subtract:", calculator.subtract(10, 4));
console.log("Multiply:", calculator.multiply(6, 2));

console.log("\n=== THIS KEYWORD ===\n");

const user = {
  name: "Alice",
  age: 25,
  greet: function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`);
  },
  haveBirthday: function() {
    this.age++;
    console.log(`Happy birthday! Now I'm ${this.age}`);
  }
};

user.greet();
user.haveBirthday();

console.log("\n=== NESTED OBJECTS ===\n");

const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco",
    country: "USA"
  },
  employees: [
    { name: "John", role: "Developer" },
    { name: "Jane", role: "Designer" }
  ]
};

console.log("Company:", company);
console.log("City:", company.address.city);
console.log("First employee:", company.employees[0].name);

console.log("\n=== OBJECT.KEYS, VALUES, ENTRIES ===\n");

const product = {
  id: 101,
  name: "Laptop",
  price: 999,
  inStock: true
};

console.log("Product:", product);
console.log("Keys:", Object.keys(product));
console.log("Values:", Object.values(product));
console.log("Entries:", Object.entries(product));

console.log("\n=== LOOPING THROUGH OBJECTS ===\n");

// for...in loop
console.log("Using for...in:");
for (let key in product) {
  console.log(`${key}: ${product[key]}`);
}

// Object.entries with forEach
console.log("\nUsing Object.entries:");
Object.entries(product).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

console.log("\n=== OBJECT.ASSIGN ===\n");

const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };
const result = Object.assign(target, source);
console.log("Target:", target);
console.log("Result:", result);

// Copy object
const original = { x: 1, y: 2 };
const copy = Object.assign({}, original);
console.log("\nOriginal:", original);
console.log("Copy:", copy);

console.log("\n=== SPREAD OPERATOR WITH OBJECTS ===\n");

const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };
console.log("Merged:", merged);

// Copy with spread
const base = { name: "Product", price: 100 };
const enhanced = { ...base, discount: 10 };
console.log("Enhanced:", enhanced);

console.log("\n=== OBJECT DESTRUCTURING ===\n");

const student = {
  name: "Bob",
  age: 20,
  grade: "A",
  school: "MIT"
};

const { name, age, grade } = student;
console.log("Name:", name);
console.log("Age:", age);
console.log("Grade:", grade);

// Destructuring with rename
const { name: studentName, school } = student;
console.log("Student Name:", studentName);
console.log("School:", school);

// Destructuring with defaults
const { name: n, gpa = 4.0 } = student;
console.log("GPA (with default):", gpa);

console.log("\n=== CONSTRUCTOR FUNCTIONS ===\n");

function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
  };
}

const person1 = new Person("John", "Doe", 30);
const person2 = new Person("Jane", "Smith", 25);
console.log("Person 1:", person1.getFullName());
console.log("Person 2:", person2.getFullName());

console.log("\n=== OBJECT.FREEZE AND OBJECT.SEAL ===\n");

// Freeze - completely immutable
const frozen = Object.freeze({ value: 100 });
frozen.value = 200; // Fails silently
console.log("Frozen object:", frozen);

// Seal - can modify existing properties but not add/remove
const sealed = Object.seal({ count: 10 });
sealed.count = 20; // Works
sealed.newProp = 30; // Fails silently
console.log("Sealed object:", sealed);

console.log("\n=== CHECKING PROPERTIES ===\n");

const obj = { name: "Test", value: 42 };
console.log("Has 'name' property:", 'name' in obj);
console.log("Has 'age' property:", 'age' in obj);
console.log("Has own 'name' property:", obj.hasOwnProperty('name'));

console.log("\n=== JSON ===\n");

const data = {
  id: 1,
  name: "Product",
  tags: ["electronics", "gadget"]
};

// Object to JSON string
const jsonString = JSON.stringify(data);
console.log("JSON String:", jsonString);

// JSON string to Object
const parsedData = JSON.parse(jsonString);
console.log("Parsed Object:", parsedData);
