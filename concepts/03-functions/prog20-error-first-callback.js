// Emulate the Node.js error-first callback convention.
function readFileMock(path, callback) {
  if (!path.endsWith(".txt")) {
    callback(new Error("Only .txt files supported"));
    return;
  }
  callback(null, "File contents");
}

readFileMock("notes.txt", (err, data) => {
  if (err) {
    console.log("Failed:", err.message);
    return;
  }
  console.log("Success:", data);
});

readFileMock("image.png", (err) => {
  if (err) {
    console.log("Failed:", err.message);
  }
});