// Locate the first matching item with find.
const attendees = [
  { name: "Arjun", checkedIn: false },
  { name: "Mira", checkedIn: true },
  { name: "Kabir", checkedIn: false },
];

const firstReady = attendees.find((person) => person.checkedIn);
console.log(firstReady);