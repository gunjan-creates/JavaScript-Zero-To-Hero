// Iterate over key-value pairs using Object.entries.
const settings = { theme: "dark", language: "en", debug: false };

Object.entries(settings).forEach(([key, value]) => {
  console.log(`${key} => ${value}`);
});