// Demonstrate the finally clause executing after try/catch.
function readSetting(text) {
  try {
    console.log("Setting:", JSON.parse(text));
  } catch (error) {
    console.log("Bad setting format.");
  } finally {
    console.log("Finished attempting to read setting.");
  }
}

readSetting("{ \"mode\": \"dark\" }");
readSetting("not json");