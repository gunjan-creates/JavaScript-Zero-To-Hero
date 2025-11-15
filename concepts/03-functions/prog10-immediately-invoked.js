// Execute an IIFE immediately after defining it.
const config = (function () {
  const secret = "token";
  return { apiUrl: "https://api.example.com", secretLength: secret.length };
})();

console.log(config);