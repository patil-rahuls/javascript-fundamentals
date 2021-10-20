//////////////////////////////////////////////////////////////
// PROMISES & FETCH API [ES 6] ///////////////////////////////
//////////////////////////////////////////////////////////////

// Its a powerful and elegant soution to handle asyncrounous code.
// Also a better way to write Ajax calls.

// 1. fetch()
// Same as POSTing or GETing data via Ajax.
// Response must be JSON or XML.
// Returns a promise
const result = fetch("https://xyz.com/api/somedata");

/* Promise Lifecycle
1. Pending
2. Settled
3. > Fulfilled
4. > Rejected

Build a Promise
Consume a Promise
*/

const getData = (input) => {
   fetch("https://xyz.com/api/somedata/"+input).then(
      function(response){
         console.log(response);// this will contain 'body' which is of type ReadableStream. We use json() to read the data.
         return response.json();      // json() is asynchronous, SO it will also return a new promise.
      }
   // We still need to handle the promise returned by json(). hence the below chained then().
   ).then(
      function(data){
         console.log(data);
      }
   );
};

// Cleaner usable version:
const getData = (input) => {
   fetch("https://xyz.com/api/somedata/"+input)
   .then((response) => response.json())
   .then((data) => renderView(data));
};
// This is a lot simpler and minimal to use instead of the traditional AJAX using XMLHTTPREQUEST
// Also we avoid the Callback Hell (Callback Hell is nested callbacks in case of executing asynchrounous events in sequence.)

// Whatever we return from a then(), it is treated as a fulfilled value.

// Another Example. chained promises.
const getData = (input) => {
   fetch("https://xyz.com/api/somedata/"+input)
   .then((response) => response.json())
   .then((data) => {
      const input2 = data[0]; // just for example 
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
   })
   .then(response => response.json()) // we need to do this all the time to parse the response body from previous promise.
   .then(data => renderview(data));
};

// Well this is my point, that callback hell is still possible in this scenario.

// Handling rejected promises.
// .then(<callback_for_fulfilled_promise>, <callback_for_rejected_promise>)
// e.g.
// ..
// .then(data => console.log(data), err => console.error(err));

const getData = (input) => {
   fetch("https://xyz.com/api/somedata/"+input)
   .then((response) => response.json() , (err) => alert(err))
   .then(
      (data) => {
         const input2 = data[0]; // just for example 
         if (!input2) return;
         return fetch("https://xyz.com/api/somedata/"+input2);
      }, 
      (err) => alert(err)
   )
   .then(response => response.json()  , (err) => alert(err))
   .then(data => renderview(data) , (err) => alert(err));
};

// But in above example, writing  , (err) => alert(err) again and again in every then() is a pain.
// We can write all the error handling at the end of promises chain.
// catch() method.
const getData = (input) => {
   fetch("https://xyz.com/api/somedata/"+input)
   .then((response) => response.json())
   .then((data) => {
      const input2 = data[0]; // just for example 
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
   })
   .then(response => response.json()) // we need to do this all the time to parse the response body from previous promise.
   .then(data => renderview(data))
   .catch(err => alert(err)); // catches error at any stage of the promise chain.
   // .catch(err => alert(err.message)); Every javascript error object has a property called 'message'.
};

// finally method - always called at the end. no matter whether promise is fulfilled or rejected.
const getData = (input) => {
   fetch("https://xyz.com/api/somedata/"+input)
   .then((response) => response.json())
   .then((data) => {
      const input2 = data[0]; // just for example 
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
   })
   .then(response => response.json()) // we need to do this all the time to parse the response body from previous promise.
   .then(data => renderview(data))
   .catch(err => alert(err.message))
   .finally(()=>{
      // always executes
      hideLoadingSpinner();// finally is useful to hide the loading gif/img after the ajax/fetch is finished.
   });
};

// Sometimes the error 404 is also considered as a fulfilled promise. because its a proper resonse given by server.
// and it is not caught by catch() and the promise is not rejected.

// So we Manually Throw Errors, to reject promises manually in certain cases like above (404)

const getData = (input) => {
   fetch("https://xyz.com/api/somedata/"+input)
   .then(
      (response) => {
         console.log(response.status); // Will show you the status
         if (!response.ok) {   // ok flag is in he response of fetch. it is either true on success or false otherwise.
            throw new Error("My Custom error Message " + response.status); // Error() is a constructor. FYI
            // Now if this error is thrown, this promise will be immediately rejected. So the enclosing then()'s promise will be rejected. and that's what we want.
            // and this propogates down to the catch()
         }
         return response.json();
      }
   )
   .then((data) => {
      const input2 = data[0]; // just for example 
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
   })
   .then(response => response.json()) // we need to do this all the time to parse the response body from previous promise.
   .then(data => renderview(data))
   .catch(err => alert(err.message)) // manually thrown errors will be caught by this.
   .finally(()=>{
      // always executes
      hideLoadingSpinner();// finally is useful to hide the loading gif/img after the ajax/fetch is finished.
   });
};