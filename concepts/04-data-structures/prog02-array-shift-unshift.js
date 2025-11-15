// Work with the start of an array using shift and unshift.
const queue = ["first", "second"];
queue.unshift("zeroth");
const head = queue.shift();

console.log("Queue:", queue);
console.log("Processed:", head);