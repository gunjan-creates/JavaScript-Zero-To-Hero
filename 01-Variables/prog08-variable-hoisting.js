// Compares hoisting behavior between var and let
console.log("Value of hoistedVar before declaration:", hoistedVar);
var hoistedVar = "I am hoisted";
console.log("Value of hoistedVar after declaration:", hoistedVar);

try {
  console.log(blockVar);
  let blockVar = "Temporal Dead Zone";
} catch (error) {
  console.log("Accessing blockVar before declaration throws:", error.message);
}
