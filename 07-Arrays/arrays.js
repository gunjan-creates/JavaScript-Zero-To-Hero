// Arrays in JavaScript

console.log("=== CREATING ARRAYS ===\n");

// Array literal
const fruits = ["Apple", "Banana", "Orange"];
console.log("Fruits:", fruits);

// Array constructor
const numbers = new Array(1, 2, 3, 4, 5);
console.log("Numbers:", numbers);

// Mixed data types
const mixed = [1, "Hello", true, null, { name: "John" }];
console.log("Mixed array:", mixed);

console.log("\n=== ACCESSING ELEMENTS ===\n");

console.log("First fruit:", fruits[0]);
console.log("Second fruit:", fruits[1]);
console.log("Last fruit:", fruits[fruits.length - 1]);

console.log("\n=== ARRAY PROPERTIES ===\n");

console.log("Array:", fruits);
console.log("Length:", fruits.length);

console.log("\n=== ADDING ELEMENTS ===\n");

// push - add to end
const colors = ["Red", "Green"];
console.log("Original:", colors);
colors.push("Blue");
console.log("After push('Blue'):", colors);

// unshift - add to beginning
colors.unshift("Yellow");
console.log("After unshift('Yellow'):", colors);

console.log("\n=== REMOVING ELEMENTS ===\n");

// pop - remove from end
const nums = [1, 2, 3, 4, 5];
console.log("Original:", nums);
const lastNum = nums.pop();
console.log("Removed:", lastNum);
console.log("After pop():", nums);

// shift - remove from beginning
const firstNum = nums.shift();
console.log("Removed:", firstNum);
console.log("After shift():", nums);

console.log("\n=== SPLICE METHOD ===\n");

const animals = ["Dog", "Cat", "Rabbit", "Bird"];
console.log("Original:", animals);

// Remove elements
animals.splice(2, 1); // Remove 1 element at index 2
console.log("After removing 'Rabbit':", animals);

// Add elements
animals.splice(1, 0, "Fish", "Turtle"); // Add at index 1, remove 0
console.log("After adding 'Fish' and 'Turtle':", animals);

// Replace elements
animals.splice(2, 1, "Hamster"); // Replace 1 element at index 2
console.log("After replacing with 'Hamster':", animals);

console.log("\n=== SEARCHING METHODS ===\n");

const arr = [10, 20, 30, 40, 50];
console.log("Array:", arr);
console.log("indexOf(30):", arr.indexOf(30));
console.log("indexOf(100):", arr.indexOf(100)); // -1 if not found
console.log("includes(40):", arr.includes(40));
console.log("includes(100):", arr.includes(100));

console.log("\n=== ITERATION METHODS ===\n");

// forEach
console.log("forEach - Print each element:");
arr.forEach((num, index) => {
  console.log(`Index ${index}: ${num}`);
});

// map - transform array
const doubled = arr.map(num => num * 2);
console.log("\nOriginal:", arr);
console.log("Doubled (map):", doubled);

// filter - filter elements
const filtered = arr.filter(num => num > 25);
console.log("\nNumbers greater than 25:", filtered);

// reduce - reduce to single value
const sum = arr.reduce((total, num) => total + num, 0);
console.log("\nSum (reduce):", sum);

console.log("\n=== FIND METHODS ===\n");

const users = [
  { id: 1, name: "John", age: 25 },
  { id: 2, name: "Jane", age: 30 },
  { id: 3, name: "Bob", age: 35 }
];

// find - first matching element
const user = users.find(u => u.age > 28);
console.log("First user older than 28:", user);

// findIndex - index of first match
const index = users.findIndex(u => u.name === "Jane");
console.log("Index of Jane:", index);

console.log("\n=== OTHER ARRAY METHODS ===\n");

// slice - extract portion
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(1, 4); // from index 1 to 4 (exclusive)
console.log("Original:", original);
console.log("Sliced (1, 4):", sliced);

// concat - merge arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const merged = arr1.concat(arr2);
console.log("\nArray 1:", arr1);
console.log("Array 2:", arr2);
console.log("Merged:", merged);

// join - array to string
const words = ["Hello", "World", "JavaScript"];
const sentence = words.join(" ");
console.log("\nArray:", words);
console.log("Joined:", sentence);

// reverse - reverse array
const reversed = [1, 2, 3, 4, 5].reverse();
console.log("\nReversed:", reversed);

// sort - sort array
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("\nUnsorted:", unsorted);
console.log("Sorted:", sorted);

console.log("\n=== SPREAD OPERATOR ===\n");

const arr3 = [1, 2, 3];
const arr4 = [4, 5, 6];
const combined = [...arr3, ...arr4];
console.log("Combined with spread:", combined);

// Copy array
const copy = [...arr3];
console.log("Original:", arr3);
console.log("Copy:", copy);

console.log("\n=== DESTRUCTURING ===\n");

const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("First:", first);
console.log("Second:", second);
console.log("Rest:", rest);

console.log("\n=== MULTI-DIMENSIONAL ARRAYS ===\n");

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];
console.log("Matrix:", matrix);
console.log("Element [1][1]:", matrix[1][1]); // 5
