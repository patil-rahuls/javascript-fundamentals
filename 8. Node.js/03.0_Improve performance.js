//////////////////////////////////////////////////////////////
// Improving Node.js Performance /////////////////////////////
//////////////////////////////////////////////////////////////

// 1. Use Node.js in Cluster Mode.(Recommended)
//     Its a Parent-children Processes pattern.
//     Multiple instances(copies) of node,
//     making it truely multithreaded.
// 2. Use Worker Threads.(Experimental)
//     Uses the Libuv's threadpool,
//     to utilize threads as per our needs.
