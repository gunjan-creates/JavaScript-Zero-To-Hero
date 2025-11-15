// Show how var, let, and const differ in scope and reassignment.
var legacyMessage = "var is function-scoped";
let blockScoped = "let is block-scoped";
const immutable = "const cannot be reassigned";

blockScoped = "let can be reassigned";

console.log(legacyMessage);
console.log(blockScoped);
console.log(immutable);