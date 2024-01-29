//////////////////////////////////////////////////////////////
// PROMISES & FETCH API [ES 6] ///////////////////////////////
//////////////////////////////////////////////////////////////

// Formal Definition: Promise is an object that is used as a placeholder for the future result of an asynchronous operation.
// Informal Definition: A container for a value that will be delivered asynchronously in the future.
// OR simply "a container/placeholder for a future value".
// And a perfect example of a future value is response from an AJAX call.

// Build a Promise.
// Same as POSTing or GETing data via Ajax.
// Response must be JSON or XML.
// Returns a promise
const result = fetch("https://reqres.in/api/users?page=2");
console.log(result);

// Consuming a promise.
// result.then(<callback fn to execute as soon as value is available>);
result.then(function(response){
   console.log(response);
   // Contains 'Body' property which is of type "ReadableStream". We use json() to read the data.
   return response.json();
   // json() is asynchronous function and it also returns a new Promise.
}).then(function(data){
   console.log(data);
});

// Observe how we have chained the promises together instead of nesting them like we do using callbacks.

// Cleaner usable version:
const getData = () => {
   fetch("https://reqres.in/api/users?page=2")
   .then(response => response.json())
   .then(data => console.log(data));
};
// This is a lot simpler and minimal to use instead of the traditional AJAX using XMLHTTPREQUEST
// Also we avoid the Callback Hell (Callback Hell is nested callbacks in case of executing asynchrounous events in sequence.)

//////////////////////////////////////////////////////////////
// IMP: Whatever we return from a then(), it is treated as a fulfilled value of that promise.

// Try this example :
(function(){
   console.log("Fetching Data asynchronously...");
   fetch("https://deelay.me/5000/https://reqres.in/api/users?page=2") // "deelay.me" delays your request by 5 seconds.
   .then((response) => {console.log("Fetched Data"); return response.json()})
   .then(data => console.log(data));
})();
// Output:
// Fetching Data asynchronously...
// Fetched Data // Prints after 5 seconds.
// {...}

//////////////////////////////////////////////////////////////
// IMP - If we do not pass any callback to a then(), it is ignored and the next chained then() method is executed.
var p = new Promise(function(resolve, reject) {
   resolve("OK");
});
p.then().then().then(function(data) {
   console.log(data);
});
// We chained the empty then() method twice.
// But the last non empty then() will be operating on the promise object 'p'
// Output - "OK"
