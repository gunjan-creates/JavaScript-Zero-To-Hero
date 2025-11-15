// Use a switch statement to decide what to eat.
const day = "Friday";
let dinner;

switch (day) {
  case "Monday":
    dinner = "Pasta";
    break;
  case "Wednesday":
    dinner = "Stir fry";
    break;
  case "Friday":
    dinner = "Pizza";
    break;
  default:
    dinner = "Chef's surprise";
}

console.log("Dinner plan:", dinner);