//////////////////////////////////////////////////////////////
// Improving Node.js Performance /////////////////////////////
//////////////////////////////////////////////////////////////
// Cluster Mode //////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Clusters of Node.js processes can be used to run multiple
// instances of Node.js that can distribute workloads among
// their application threads.

// Cluster Manager
//     A program responsible for creating, starting, stopping,
//     restarting and monitoring intances.
//     A popular production ready solution is PM2.

// Cluster Mode includes a main process
// (identified by 'cluster.isPrimary')
// We use it to create other processes that each execute
// a separate instance of the app.

// Implementation
//  import the 'cluster' module present in the node
//     standard library.
//  cluster.fork() -> Starts a worker instance.
//     Each instance created shares same port of the
//     main process.

//////////////////////////////////////////////////////////////
// Example:
const cluster = require('cluster');
console.log(cluster.isPrimary);
// Check if the file being executed is in master mode.
if(cluster.isPrimary){
    // Following code causes current file to be executed
    // again but in a slave/child mode.
    cluster.fork();
    cluster.fork();
} else {
    // Child mode - Actual Functionality
    const express = require('express');
    const app = express();
    const doWork = (duration) => {
        const start = Date.now();
        while(Date.now() - start < duration){}
    };
    app.get('/', (req, res) => {
        doWork(5000);
        res.send('Hi There');
    });
    app.get('/fast', (req, res)=>{
        res.send('this was fast!');
    });
    app.listen(3000);
}

// Downsides of Clustering -
// If, for a large no. of requests, if we over allocate instances
// 'cluster.fork()', even though all the requests would be
// started at the same instant, but the CPU will try to work
// upon all the threads, and bounce around and process the
// tasks(requests) at exactly the same time,
// which will consume time.

// This is because of limited physical cores in the server CPU.

// Solution:
// Use fewer instances.
// Try to match no. of CPU Cores to No. of children.
