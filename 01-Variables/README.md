# Variables in JavaScript

Variables are containers for storing data values. JavaScript provides three ways to declare variables:

## Declaration Keywords

### 1. var (Function Scoped)
- Older way of declaring variables
- Function scoped or globally scoped
- Can be re-declared and updated
- Hoisted to the top

### 2. let (Block Scoped)
- Modern way to declare variables
- Block scoped
- Cannot be re-declared in the same scope
- Can be updated

### 3. const (Block Scoped)
- Used for constants
- Block scoped
- Cannot be re-declared or updated
- Must be initialized at declaration

## Best Practices
- Use `const` by default
- Use `let` when you need to reassign
- Avoid `var` in modern JavaScript

## Examples
Check the example files in this folder to see variables in action!
## Quick Examples

~~~js
// const: must be initialized, cannot be reassigned
const PI = 3.14159;
// PI = 3.14; // TypeError

// let: block-scoped, can be updated
let counter = 0;
counter++;

// var: function-scoped, avoid in modern code
var legacy = 'value';
~~~

## Block Scope vs Function Scope

~~~js
if (true) {
  let a = 1;   // exists only inside this block
  const c = 3; // exists only inside this block
  var b = 2;   // leaks out of the block
}
// console.log(a); // ReferenceError
// console.log(c); // ReferenceError
console.log(b);    // 2
~~~

## Hoisting and TDZ

~~~js
console.log(v); // undefined (var declarations are hoisted)
var v = 10;

// console.log(x); // ReferenceError (TDZ for let/const)
let x = 5;
~~~

## const with Objects and Arrays

~~~js
const user = { name: 'Ada' };
user.name = 'Grace'; // mutation is allowed
// user = {}; // TypeError: reassignment not allowed

const list = [1, 2];
list.push(3);       // mutation is allowed
~~~

## Try It
- Change a let variable inside and outside a block to see scoping.
- Attempt to reassign a const and observe the error.
- Log a let variable before declaration to see the TDZ in action.