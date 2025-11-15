// Use Set to store unique values.
const tags = new Set(["js", "node", "js", "web"]);
tags.add("frontend");

console.log("Tags count:", tags.size);
console.log("Has 'node':", tags.has("node"));