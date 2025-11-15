// Wrap risky code in a try-catch block.
const payload = "{ \"valid\": true }";

try {
  const parsed = JSON.parse(payload);
  console.log("Parsed JSON:", parsed);
} catch (error) {
  console.log("Failed to parse JSON:", error.message);
}