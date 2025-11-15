// Use nested if statements to choose nested categories.
const temperature = 5;

if (temperature > 25) {
  console.log("It is a hot day.");
} else {
  if (temperature > 10) {
    console.log("It is mild outside.");
  } else {
    console.log("It is a cold day.");
  }
}