
//////////////////////////////////////////////////////////////
// Example script - HTTP Server //////////////////////////////
//////////////////////////////////////////////////////////////

// Creating a web-server with NodeJS from scratch.
// 'http' module
// There are many built-in utility modules in node js, such as http module.
// With http mdule, you can create an application that listens to http requests and returns http messages.

// Here is sample code that creates an instance of a server using the http module. 
// This code makes use of the http.createServer() method to create the server instance.

import http from 'http';
http.createServer(function (req, res) {
    res.write('hello from server');     // write a response to the client
    res.end();                          // end of response from server
}).listen(6000);                        // the server instance listens for http requests on port 6000

// The above code can also be bifurcated.
const myServer = http.createServer(function (req, res) {
res.write('hello from server');
    res.end();
});
myServer.listen(6000);

//////////////////////////////////////////////////////////////
// Serving a static html page.
import http from "http";
import fs from "fs";
http.createServer((req, res) => {
    fs.readFile('index.html',(err, data) => {
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(9969);

// OR

import http from "http";
import fs from "fs";
fs.readFile('index.html',(err, data) => {
    http.createServer((req, res) => {
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    }).listen(9969);
});