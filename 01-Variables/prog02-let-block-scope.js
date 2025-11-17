// Shows how let keeps variables limited to a block
let message = "Outside block";

if (true) {
  let message = "Inside block";
  console.log("Block message:", message);
}

console.log("Global message:", message);
