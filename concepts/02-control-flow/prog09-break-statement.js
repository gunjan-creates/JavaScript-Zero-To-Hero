// Stop a loop early once a condition is satisfied using break.
const ids = [101, 203, 305, 407];
let found = null;

for (const id of ids) {
  if (id % 3 === 0) {
    found = id;
    break;
  }
}

console.log("First divisible by three:", found);