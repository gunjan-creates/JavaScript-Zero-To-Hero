// Ensure the loop body runs at least once with do-while.
let remaining = 3;

do {
  console.log(`Countdown: ${remaining}`);
  remaining -= 1;
} while (remaining >= 0);