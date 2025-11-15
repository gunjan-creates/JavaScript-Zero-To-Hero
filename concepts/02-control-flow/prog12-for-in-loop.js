// Walk through object keys using for...in.
const user = { name: "Alex", age: 29, city: "Pune" };

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}