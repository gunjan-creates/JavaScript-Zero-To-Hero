// Aggregate values into a single result using reduce.
const expenses = [1200, 800, 450];
const total = expenses.reduce((sum, value) => sum + value, 0);

console.log("Total expenses:", total);