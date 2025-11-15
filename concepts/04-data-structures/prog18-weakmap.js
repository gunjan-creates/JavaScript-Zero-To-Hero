// Keep metadata for objects without preventing garbage collection.
const meta = new WeakMap();
const element = { id: 1 };

meta.set(element, { rendered: true });

console.log(meta.get(element));