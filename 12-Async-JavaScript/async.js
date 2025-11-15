// Asynchronous JavaScript

console.log("=== SYNCHRONOUS VS ASYNCHRONOUS ===\n");

console.log("1. First");
console.log("2. Second");
console.log("3. Third");

console.log("\n=== CALLBACKS ===\n");

// Simple callback
function fetchData(callback) {
  console.log("Fetching data...");
  setTimeout(() => {
    const data = { id: 1, name: "User Data" };
    callback(data);
  }, 1000);
}

console.log("Before fetch");
fetchData((data) => {
  console.log("Data received:", data);
});
console.log("After fetch (doesn't wait)");

// Callback hell example
console.log("\nCallback Hell (Pyramid of Doom):");
setTimeout(() => {
  console.log("Step 1");
  setTimeout(() => {
    console.log("Step 2");
    setTimeout(() => {
      console.log("Step 3");
      setTimeout(() => {
        console.log("Step 4");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

console.log("\n=== SETTIMEOUT AND SETINTERVAL ===\n");

// setTimeout - execute once after delay
console.log("Setting timeout...");
setTimeout(() => {
  console.log("This appears after 2 seconds");
}, 2000);

// setInterval - execute repeatedly
console.log("Setting interval...");
let counter = 0;
const intervalId = setInterval(() => {
  counter++;
  console.log("Interval count:", counter);
  if (counter === 3) {
    clearInterval(intervalId);
    console.log("Interval cleared");
  }
}, 1500);

console.log("\n=== PROMISES ===\n");

// Creating a promise
const promise = new Promise((resolve, reject) => {
  console.log("Promise created");
  const success = Math.random() > 0.3;
  
  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully!");
    } else {
      reject("Promise rejected!");
    }
  }, 2000);
});

// Using promise
promise
  .then(result => {
    console.log("Success:", result);
    return "Chained result";
  })
  .then(chainedResult => {
    console.log("Chained:", chainedResult);
  })
  .catch(error => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed (finally block)");
  });

console.log("\n=== PROMISE CHAINING ===\n");

function step1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 1 completed");
      resolve("Data from Step 1");
    }, 1000);
  });
}

function step2(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 2 completed with:", data);
      resolve("Data from Step 2");
    }, 1000);
  });
}

function step3(data) {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Step 3 completed with:", data);
      resolve("Final Result");
    }, 1000);
  });
}

console.log("Starting promise chain...");
step1()
  .then(result1 => step2(result1))
  .then(result2 => step3(result2))
  .then(finalResult => {
    console.log("All steps completed:", finalResult);
  })
  .catch(error => {
    console.log("Error in chain:", error);
  });

console.log("\n=== ASYNC/AWAIT ===\n");

// Async function
async function fetchUserData() {
  console.log("Fetching user data...");
  
  // Simulate API call
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve({ id: 1, name: "John Doe", email: "john@example.com" });
    }, 2000);
  });
  
  const userData = await promise;
  console.log("User data received:", userData);
  return userData;
}

// Using async function
console.log("Before calling async function");
fetchUserData().then(data => {
  console.log("Processing user data:", data.name);
});
console.log("After calling async function (doesn't wait)");

// Async/await with error handling
async function fetchWithErrorHandling() {
  try {
    console.log("\nFetching with error handling...");
    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
          resolve("Data fetched successfully");
        } else {
          reject(new Error("Failed to fetch data"));
        }
      }, 2000);
    });
    
    const result = await promise;
    console.log("Result:", result);
    return result;
  } catch (error) {
    console.log("Caught error:", error.message);
  } finally {
    console.log("Cleanup completed");
  }
}

fetchWithErrorHandling();

console.log("\n=== PROMISE.ALL ===\n");

const promise1 = new Promise(resolve => setTimeout(() => resolve("Promise 1"), 1000));
const promise2 = new Promise(resolve => setTimeout(() => resolve("Promise 2"), 2000));
const promise3 = new Promise(resolve => setTimeout(() => resolve("Promise 3"), 1500));

console.log("Waiting for all promises...");
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log("All promises resolved:", results);
  })
  .catch(error => {
    console.log("One promise failed:", error);
  });

console.log("\n=== PROMISE.RACE ===\n");

const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 3000));

console.log("Racing promises...");
Promise.race([fast, slow])
  .then(result => {
    console.log("First to complete:", result);
  });

console.log("\n=== PROMISE.ALLSETTLED ===\n");

const promiseSuccess = new Promise(resolve => setTimeout(() => resolve("Success"), 1000));
const promiseFailure = new Promise((_, reject) => setTimeout(() => reject("Failure"), 1000));

console.log("Waiting for all to settle...");
Promise.allSettled([promiseSuccess, promiseFailure])
  .then(results => {
    console.log("All settled:");
    results.forEach((result, index) => {
      console.log(`Promise ${index + 1}:`, result.status, result.value || result.reason);
    });
  });

console.log("\n=== PRACTICAL ASYNC EXAMPLES ===\n");

// Sequential async operations
async function sequentialOperations() {
  console.log("Starting sequential operations...");
  
  const result1 = await new Promise(resolve => {
    setTimeout(() => resolve("First operation"), 1000);
  });
  console.log("1:", result1);
  
  const result2 = await new Promise(resolve => {
    setTimeout(() => resolve("Second operation"), 1000);
  });
  console.log("2:", result2);
  
  const result3 = await new Promise(resolve => {
    setTimeout(() => resolve("Third operation"), 1000);
  });
  console.log("3:", result3);
  
  console.log("All sequential operations completed");
}

sequentialOperations();

// Parallel async operations
async function parallelOperations() {
  console.log("\nStarting parallel operations...");
  
  const promises = [
    new Promise(resolve => setTimeout(() => resolve("Op 1"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Op 2"), 1000)),
    new Promise(resolve => setTimeout(() => resolve("Op 3"), 1000))
  ];
  
  const results = await Promise.all(promises);
  console.log("All parallel operations completed:", results);
}

// Run after sequential completes
setTimeout(() => {
  parallelOperations();
}, 5000);

console.log("\n=== ASYNC ITERATION ===\n");

async function processArray() {
  const items = [1, 2, 3, 4, 5];
  
  console.log("Processing items sequentially:");
  for (const item of items) {
    await new Promise(resolve => setTimeout(resolve, 500));
    console.log("Processed:", item);
  }
  console.log("All items processed");
}

setTimeout(() => {
  processArray();
}, 7000);

console.log("\nNote: Check console periodically to see async operations complete!");
