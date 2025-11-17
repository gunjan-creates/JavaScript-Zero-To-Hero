// Illustrates const protecting the binding, not the value's internals
const settings = { theme: "light", notifications: true };

settings.theme = "dark"; // allowed because the object itself is mutable
console.log("Updated settings:", settings);

// settings = {}; // Uncommenting would cause TypeError: Assignment to constant variable.
