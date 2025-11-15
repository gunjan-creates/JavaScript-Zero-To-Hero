// Use guard clauses to validate input before continuing.
function enrollStudent(name) {
  if (!name) {
    console.log("Name is required to enroll.");
    return;
  }

  console.log(`${name} successfully enrolled.`);
}

enrollStudent("Riya");
enrollStudent("");