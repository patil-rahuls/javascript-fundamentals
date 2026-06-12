## CLI Arguments

Getting input from user into your node js application via CLI.

Remember we have may "global" objects. We see it by typing global inside node CLI terminal. One of those global objects is `"process"`.
 
There are several properties and methods of `process` object, like `process.exit()`, `process.argv` etc.


### `process.argv` (argv - argument vector)

`argv` is an array of the arguents supplied to the script while executing it.

Let's say we have the following code in our app.js.

`console.log(process.argv);`
  
and we run the program by passing some arguments:
  
`node app.js rahul`

Output:
  - `['path/to/the/node_js/executable/on/your/platform', 'path/to/your/node_js/application', 'rahul' ]`
- First 2 items in argv are always there. From 3rd onwards are our CLI arguments.

&nbsp;
---
---
<!-- PAGINATION_START -->

**Parent:** [Node.js](../8.%20Node.js/)
  
**Previous:** ← [Node.js > Streams Events](21-streams-events.md)

**Next:** → [Node.js > Deployment](./23-deployment.md)

<!-- PAGINATION_END -->
