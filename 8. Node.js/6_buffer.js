//////////////////////////////////////////////////////////////
// BUFFER ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Buffers --> These are temporary storage area in memory used
// to hold data while it's being transferred from one place
// to another.

// When a user uploads a 5GB video to your Node.js server, the
// server doesn't wait for the whole 5GB to arrive in
// "one piece." Instead:

// The data arrives in chunks (small pieces of binary).
// Each chunk is placed into a Buffer.
// Node.js processes that Buffer (writes it to disk) and then
// clears it for the next chunk.

// In Node.js Buffer is an abstraction over RAM.
