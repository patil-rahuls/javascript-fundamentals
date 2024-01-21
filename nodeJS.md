##########################################################################################
Anonymous Function
    A function that is not named. An anonymous function is often passed into another function as a parameter.
Application Server
	Transforms data into dynamic content and runs the business logic, which is the data storage and transfer rules.
Asynchronous
	A process that runs independently of other processes.
Callback Function
	A function passed into another function as a parameter, which is then invoked inside the outer function to complete an action. Instead of blocking on asynchronous I/O operations, callback functions are used to handle results when the operations complete.
Database Server
	A server dedicated to providing database services.
Dependencies
	Code, usually in the form of libraries and packages, that are called from other modules and reused in a program.
Event-Driven
	Where the flow of a program is determined by particular events such as user input.
Express.js
	A highly configurable web framework for building applications on Node.js.
Framework
	Generates code that cannot be altered to perform common tasks. Examples include Django, Ruby on Rails, and Express.js.
HTTP Server
	A type of software-based server that understands URLs and hypertext transfer protocol.
Load
	Refers to the number of concurrent users, the number of transactions, and the amount of data transferred back and forth between the clients and servers.
Module
	Files containing related, encapsulated JavaScript code that serve a specific purpose.
Multi-Threaded
	Where multiple tasks are executed simultaneously.
Node.js
	A JavaScript runtime environment that runs on Google Chrome’s V8 engine.
Non-Blocking
	Failure of a given thread does not cause failure in another, and the execution of a task is not blocked until execution of another task is completed.
Npm
	Stands for node package manager. It is the default package manager for the Node.js runtime environment.
Package
	A directory with one or more modules bundled together.
Package.json
	Contains metadata information about the project, including dependencies and scripts.
Payload
	The data transmitted between client and server.
Runtime Environment
	Behaves similarly to a mini operating system that provides the resources necessary for an application to run. It is the infrastructure that supports the execution of a codebase. It is the hardware and software environment in which an application gets executed. Node.js is an example of a backend runtime environment.
Scalability
	The application’s ability to dynamically handle the load as is or shrinks without it affecting the application’s performance.
Server.js
	A file that contains the code that handles server creation.
Single-Threaded
	Where only one command is processed at a given point of time.
Web Server
	Ensures client requests are responded to, often using HTTP.
Web Service
	A type of web API that communicates using HTTP requests. It is the web service in the programming interface that sends and receives requests using HTTP among web servers and the client.
##########################################################################################

1. Why Node JS
    Same language for server and client side
    Large community of users ensure great support.
    Is single threded and relies on callbacks.
    Single threaded,asynchrounous,event drivenarchitecture that can handle 100s/ 1000s of concurrent requests.
    Abundance of packages such as in NPM.
    Can handle large number of concurrent requests.
    best for event driven application. and with lots of I/Os.
    native support for JSON in node js.
    Best suited for microservices development.


3. Creating a web-server with NodeJS
    Node JS is a JS runtime.
    It is built for heavy emphasis on concurrent programming.
    Single threaded application that handles I/O operations through events.
    Instead of blocking on asynchrounous operations, we write 'callbacks' that handle results when the complete.
    Scalable
    Concurrent
    Quick development with minimal set of tools.

    'http' module
    There are many built-in utility modules in node js, such as http module.
    With http mdule, you can create an appliaction that listens to http requests and returns http message.



// The http module provides methods to transfer data over HTTP. To include the http module in your application, you should require it.
// Here is sample code that creates an instance of a server using the http module. This code makes use of the http.createServer() method to create the server instance.
let http = require('http');
http.createServer(function (req, res) {
    res.write('hello from server');//write a response to the client
    res.end();//end of response from server
}).listen(6000);//the server instance listens for http requests on port 6000

// The fs module is used to interact with a file system. It does not need to be installed because it is part of the Node.js core and can simply be required. The following code sample reads a local file synchronously using the fs module and prints the file contents to the console.
// sample code to read a file synchronously using the fs.readFile() method
const fs = require('fs');
const data = fs.readFile('sample.txt', 'utf8');
// print contents of the file "sample.txt" to console
console.log(data);

// The fs module can also be used for input and output, known as I/O. The fs module methods can be used to retrieve information from or write data to an external file.
const fs = require(‘fs’);
const data = fs.readFileSync(‘/content.md’); // blocks here until file is read
console.log(data);//writes data in the content.md file to the console

// The OS module provides methods to retrieve information from the operating system that the application is running on and interact with it. This is sample code from the OS module that gets the computer's platform and architecture.
let os = require('os');
console.log("Computer OS Platform Info : " + os.platform());
console.log("Computer OS Architecture Info: " + os.arch());

// The path module allows you to retrieve and manipulate directory and file paths.
// The following code retrieves the last portion of a given file path and prints that value to the console:
const path = require('path');
let result = path.basename('/content/index/home.html');
console.log(result); //outputs home.html to the console

// The Node.js util module is intended for internal use for accomplishing such tasks as debugging and deprecating functions. Say you want to debug a program to count the number of iterations in a loop. You could use util.format() method as follows:
let util = require('util');
let str = 'The loop has executed %d time(s).';
for (let i = 1; i <= 10; i++) {
    console.log(util.format(str, i)); //outputs 'The loop has executed i time(s)'
}

// The URL module is used to divide up a web address into readable parts. Here is a sample code that returns the value of the "firstName" query object from the given URL.
const url = require('url');
let webAddress = 'http://localhost:2000/index.html?lastName=Kent&firstName=Clark';
let qry = url.parse(webAddress, true);
let qrydata = qry.query; //returns an object: {lastName: 'Kent', firstName: 'Clark'}
console.log(qrydata.firstName); //outputs Clark

// The querystring module provides methods to parse through the query string of a URL.
// For example,
let qry = require('querystring');
let qryParams = qry.parse('lastName=Kent&firstName=Clark');
console.log(qryParams.firstName); //returns Clark
