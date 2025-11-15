# Asynchronous JavaScript

JavaScript is single-threaded but can handle asynchronous operations through various mechanisms.

## Asynchronous Concepts

### Synchronous vs Asynchronous
- **Synchronous**: Code executes line by line
- **Asynchronous**: Code can execute later without blocking

### Event Loop
JavaScript's mechanism for handling async operations

## Asynchronous Patterns

### 1. Callbacks
Functions passed as arguments to be executed later

### 2. Promises
Objects representing eventual completion or failure
- States: pending, fulfilled, rejected
- Methods: `then()`, `catch()`, `finally()`

### 3. Async/Await
Syntactic sugar for working with promises
- `async` keyword defines async function
- `await` keyword waits for promise resolution

## Common Async Operations

### setTimeout()
Execute code after a delay

### setInterval()
Execute code repeatedly at intervals

### Fetch API
Make HTTP requests

### Promise Methods
- `Promise.all()` - Wait for all promises
- `Promise.race()` - Wait for first promise
- `Promise.allSettled()` - Wait for all to settle
- `Promise.any()` - Wait for first fulfilled

## Examples
Check the example files in this folder to see async JavaScript in action!
