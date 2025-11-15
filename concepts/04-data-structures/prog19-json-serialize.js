// Convert objects to and from JSON strings.
const todo = { title: "Learn JS", done: false };
const json = JSON.stringify(todo);
const parsed = JSON.parse(json);

console.log(json);
console.log(parsed);