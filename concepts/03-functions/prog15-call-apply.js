// Invoke functions with call and apply to supply custom contexts.
function describe(greeting, punctuation) {
  return `${greeting}, I am ${this.name}${punctuation}`;
}

const character = { name: "Neo" };

console.log(describe.call(character, "Hello", "!"));
console.log(describe.apply(character, ["Greetings", "..."]));