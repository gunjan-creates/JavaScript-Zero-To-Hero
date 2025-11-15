// Destructure object parameters for clarity.
function printCoordinates({ x, y }) {
  console.log(`Point at (${x}, ${y})`);
}

printCoordinates({ x: 4, y: 7 });