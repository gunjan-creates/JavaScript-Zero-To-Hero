// Pass a callback function to handle completion of an async task.
function simulateDownload(filename, callback) {
  setTimeout(() => {
    callback(`${filename} downloaded`);
  }, 100);
}

simulateDownload("report.pdf", (message) => {
  console.log(message);
});