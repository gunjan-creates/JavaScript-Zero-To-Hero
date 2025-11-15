// Provide default parameter values for optional arguments.
function createUser(name = "Guest", role = "viewer") {
  return { name, role };
}

console.log(createUser("Rashmi", "admin"));
console.log(createUser("Raj"));