// Leverage Map for key-value storage with non-string keys.
const studentGrades = new Map();
const alice = { name: "Alice" };
const bob = { name: "Bob" };

studentGrades.set(alice, "A");
studentGrades.set(bob, "B");

console.log(studentGrades.get(alice));
console.log(studentGrades.has(bob));