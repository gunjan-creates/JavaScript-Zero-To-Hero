// Copy and extend objects using spread syntax.
const baseConfig = { retries: 3, timeout: 1000 };
const overrides = { timeout: 2000 };
const merged = { ...baseConfig, ...overrides };

console.log(merged);