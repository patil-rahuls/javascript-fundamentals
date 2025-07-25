#### Node.js

- A javascript runtime environment that runs on Google Chrome's V8 engine.
- It is built for heavy emphasis on concurrent programming.
- Non-Blocking Asynchronous and Event-Driven Architecture.

#### Why Node JS

- Same language for server and client side.
- Large community of users ensure great support.
- Though it is single threaded, it relies on callbacks, asynchrounous and event driven architecture that can handle really huge number of concurrent requests.
- Instead of blocking on asynchrounous operations, we write 'callbacks' that handle results when the events complete.
- Non Blocking I/O
    - I/O means Data Input and Output. It can be reading data from file system, from a server, querying database etc.
    - I/O operation takes time.
    - Non Blocking I/O example: Node JS can do other things(continue scripts, fire another requests, etc) while waiting for response from database.
    - Non Blocking I/O was implemented in Browser. If it was blocking, the screen would freeze before user while processing an I/O.
		- It makes it lightweight and efficient.
- Abundance of packages such as in NPM.
- Best for event driven application with lots of I/Os (e.g. e-commerce).
- Node.js has native support for JSON.
- Best suited for microservices development.

#### Glossary

- Anonymous Function - 
	A function that is not named. An anonymous function is often passed into another function as a parameter.

- Callback Function - 
	A function passed into another function as a parameter, which is then invoked inside the outer function to complete an action. 
	Instead of blocking on asynchronous I/O operations, callback functions are used to handle results when the operations complete.

- Dependencies - 
	Code, usually in the form of libraries and packages, that are called from other modules and reused in a program.

- Event-Driven - 
	Where the flow of a program is determined by particular events such as user input, or a trigger _(e.g. file upload)_.

- Express.js - 
	A highly configurable web framework for building web applications on Node.js.

- Framework - 
	Generates code that cannot be altered to perform common tasks. Examples include Django, Ruby on Rails, and Express.js.

- HTTP Server - 
	A type of software-based server that understands URLs and hypertext transfer protocol.

- Node.js - 
	A JavaScript runtime environment that runs on Google Chrome’s V8 engine.

- Non-Blocking - 
	Failure of a given thread does not cause failure in another, and the execution of a task is not blocked until execution of another task is completed.

- Module - 
	Files containing related, encapsulated JavaScript code that serve a specific purpose.

- Npm - 
	Stands for node package manager. It is the default package manager for the Node.js runtime environment.

- Package - 
	A directory with one or more modules bundled together.

- Package.json - 
	Contains metadata information about the project, including dependencies and scripts.

- Payload - 
	The data transmitted between client and server.

- Runtime Environment - 
	Behaves similarly to a mini operating system that provides the resources necessary for an application to run. It is the infrastructure that supports the execution of a codebase. It is the hardware and software environment in which an application gets executed. Node.js is an example of a backend runtime environment.

- Load - 
	Refers to the number of concurrent users, the number of transactions, and the amount of data transferred back and forth between the clients and servers.

- Scalability - 
	The application’s ability to dynamically handle the load as is or shrinks without it affecting the application’s performance.

- Web Service - 
	A type of web API that communicates using HTTP requests. It is the web service in the programming interface that sends and receives requests using HTTP among web servers and the client.
