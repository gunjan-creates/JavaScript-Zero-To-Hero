// Extract properties from objects with destructuring.
const profile = { username: "coder123", followers: 1500 };
const { username, followers } = profile;

console.log(`${username} has ${followers} followers.`);