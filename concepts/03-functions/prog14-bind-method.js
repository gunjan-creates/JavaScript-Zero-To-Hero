// Fix a function's this value using bind.
const timer = {
  seconds: 0,
  tick() {
    this.seconds += 1;
    console.log("Seconds elapsed:", this.seconds);
  },
};

const boundTick = timer.tick.bind(timer);
boundTick();
boundTick();