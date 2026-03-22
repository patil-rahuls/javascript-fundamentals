//////////////////////////////////////////////////////////////
// STREAMS EVENTS ////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Streams are instances of EventEmitters.
// You can listen to their "life cycle":

// "data":
// Fired when a new chunk of data is ready to be read.

// "end":
// Fired when there is no more data left in the readable stream.

// "error":
// Fired if something goes wrong (e.g., file not found).

// "finish":
// Fired when a writable stream has finished writing everything.

// "drain":
// The drain event is emitted by the Writer the moment its
// internal buffer has been emptied and it is ready to receive
// more data again. Not after every chunk is processed.



// Use Case:
// We use these events, when we want to have more control over
// the streaming data.

// Example 1: Progress Bars & Analytics (The "Counter")
// If you are downloading a large update for a game, the UI needs
// to know: "How much is done?"
const fs = require('fs');
const totalUpdateSize = 10240000;
let downloaded = 0;

const readStream = fs.createReadStream('heavy_game_assets.zip');

readStream.on('data', (chunk) => {
  downloaded += chunk.length;
  const percentage = ((downloaded/totalUpdateSize)*100).toFixed(2);

  // This would be sent to your frontend via Socket.io
  process.stdout.write(`\rProgress: ${percentage}%`);
});

readStream.on('end', () => {
  console.log('\nDownload complete.');
});


// Example 2: pause() & resume()
// Handling "Backpressure"
// This is a more advanced real-life scenario. Imagine your Readable
// stream is a fast Fiber Optic connection, but your Writable stream
// is a slow, old 3G connection.
// The data will pile up in your RAM and crash the server.

// Solution: We can pause the reader stream while the writer stream
// is writing the data chunk to the destination. Once that chunk is
// written successfully, we can resume the reader stream, so that
// the writer stream can listen to its data and process further.
const fs = require('fs');
const reader = fs.createReadStream('huge_4k_video.mp4');
const writer = fs.createWriteStream('slow_destination.mp4');

reader.on('data', (chunk) => {
  const canContinue = writer.write(chunk);
  // When you call writer.write(chunk), Node.js doesn't always write
  // to the disk immediately. It puts the data into a small
  // internal buffer (the "waiting room").

  // If that waiting room gets too full writer.write() returns
  // false. That's when we need to pause() manually.

  if (!canContinue) {
    console.log('Writer is overwhelmed! Pausing reader...');
    reader.pause();
  }
});

// The 'drain' event fires when the writer is ready for more data
// It only emits if that "waiting room" (the internal buffer)
// was full and then became empty again.
writer.on('drain', () => {
  console.log('Writer cleared. Resuming reader...');
  reader.resume();
});

// The drain event is only emitted when:
// A call to writer.write() returned false (Buffer full).
// AND that buffer has now been completely cleared (Buffer empty).
// If writer.write() always returns true, the drain event stays silent.
