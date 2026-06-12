## Node.js

- A javascript runtime environment that runs on `Google Chrome's V8 engine`.
- It is built for heavy emphasis on `concurrent programming`.
- It has `Non-Blocking`, `Asynchronous` and `Event-Driven` Architecture.

## Why Node.js

- _Same programming language for both the server and the client app._
- _Large community of users ensure great support._
- _Abundance of packages in `NPM` package for almost all functionalities, so we don't re-invent the wheel._
- _Node.js has native support for `JSON`._
- _Non-Blocking I/O_:
  - Instead of blocking on asynchrounous operations, we write `callbacks` or `promises` that handle results when the events complete. 
  - I/O means Data Input and Output. I/O operation takes time. _For example, interacting with file system, http requests/response, databases etc._

  - Non Blocking I/O example:

    _Node JS can do other things (continue scripts, fire another requests, etc) while waiting for response from database._

  - _Non Blocking I/O was implemented in Browser. If it was blocking, the screen would freeze before user while processing an I/O._

- _Best for event driven application with lots of I/O (e-commerce)._
- _Best suited for `microservices` development._

---
---

<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [7. Modules](../7.%20Modules/)  

**Next:** → [Node.js > npm](02-npm.md)

<!-- PAGINATION_END -->
