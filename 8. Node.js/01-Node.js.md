## Node.js
- A javascript runtime environment that runs on `Google Chrome's V8 engine`.
- It is built for heavy emphasis on `concurrent programming`.
- `Non-Blocking` Asynchronous and `Event-Driven` Architecture.

### Why Node JS

- Same language for server and client side.
- Large community of users ensure great support.
- Though it is single threaded, it relies on callbacks, asynchrounous and event driven architecture that can handle really huge number of concurrent requests.
- Instead of blocking on asynchrounous operations, we write `callbacks` that handle results when the events complete.
- Non Blocking I/O
    - I/O means Data Input and Output.

      It can be reading data from file system, from a server, querying database etc.
    - I/O operation takes time.
    - Non Blocking I/O example:

      Node JS can do other things _(continue scripts, fire another requests, etc)_ while waiting for response from database.
    - Non Blocking I/O was implemented in Browser. If it was blocking, the screen would freeze before user while processing an I/O.

    - It makes it lightweight and efficient.
- Abundance of packages such as in `NPM`.
- Best for event driven application with lots of I/Os (e.g. e-commerce).
- Node.js has native support for `JSON`.
- Best suited for `microservices` development.

---
