// Access array elements by index in a loop.
const playlist = ["Intro", "Verse", "Chorus", "Bridge"];

for (let index = 0; index < playlist.length; index += 1) {
  console.log(`Part ${index}: ${playlist[index]}`);
}