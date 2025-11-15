// Show that objects declared with const can still mutate internally.
const hero = { name: "Coder", level: 1 };
hero.level += 1;

console.log(hero);