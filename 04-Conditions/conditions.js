// Conditional Statements in JavaScript

console.log("=== IF STATEMENT ===\n");

let temperature = 25;
if (temperature > 30) {
  console.log("It's hot outside!");
}

if (temperature < 30) {
  console.log("It's a pleasant day!");
}

console.log("\n=== IF...ELSE STATEMENT ===\n");

let age = 20;
if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

console.log("\n=== IF...ELSE IF...ELSE STATEMENT ===\n");

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

console.log("\n=== NESTED IF STATEMENTS ===\n");

let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn) {
  console.log("User is logged in");
  if (isAdmin) {
    console.log("User has admin privileges");
  } else {
    console.log("User has regular privileges");
  }
} else {
  console.log("User is not logged in");
}

console.log("\n=== SWITCH STATEMENT ===\n");

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log("Day", day, "is", dayName);

// Switch with fall-through
let month = "January";
let season;

switch (month) {
  case "December":
  case "January":
  case "February":
    season = "Winter";
    break;
  case "March":
  case "April":
  case "May":
    season = "Spring";
    break;
  case "June":
  case "July":
  case "August":
    season = "Summer";
    break;
  case "September":
  case "October":
  case "November":
    season = "Fall";
    break;
  default:
    season = "Unknown";
}

console.log(month, "is in", season);

console.log("\n=== TERNARY OPERATOR ===\n");

let userAge = 25;
let accessLevel = userAge >= 18 ? "Full Access" : "Limited Access";
console.log("Age:", userAge, "- Access:", accessLevel);

console.log("\n=== TRUTHY AND FALSY VALUES ===\n");

// Falsy values
console.log("Falsy values:");
console.log("false:", Boolean(false));
console.log("0:", Boolean(0));
console.log("Empty string:", Boolean(''));
console.log("null:", Boolean(null));
console.log("undefined:", Boolean(undefined));
console.log("NaN:", Boolean(NaN));

// Truthy values
console.log("\nTruthy values:");
console.log("true:", Boolean(true));
console.log("1:", Boolean(1));
console.log("Non-empty string:", Boolean('hello'));
console.log("Empty object:", Boolean({}));
console.log("Empty array:", Boolean([]));

console.log("\n=== LOGICAL OPERATORS IN CONDITIONS ===\n");

let username = "john";
let password = "pass123";

if (username === "john" && password === "pass123") {
  console.log("Login successful");
} else {
  console.log("Login failed");
}

let isWeekend = false;
let isHoliday = true;

if (isWeekend || isHoliday) {
  console.log("You can rest today!");
} else {
  console.log("It's a working day");
}
