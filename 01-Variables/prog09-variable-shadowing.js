// Demonstrates shadowing a variable inside a nested block
let status = "offline";
console.log("Initial status:", status);

function connect() {
  let status = "online";
  console.log("Status inside connect():", status);
}

connect();
console.log("Status after connect():", status);
