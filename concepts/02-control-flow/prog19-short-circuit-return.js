// Use logical operators to provide default values.
const suppliedName = "";
const fallbackName = "Guest";
const activeName = suppliedName || fallbackName;

console.log("Logged in as:", activeName);