//////////////////////////////////////////////////////////////
// CHAINED PROMISES [ES 6] ///////////////////////////////////
//////////////////////////////////////////////////////////////

// Formal Definition: An Object that is used as a placeholder for the future result of an asynchronous operation.
// Informal Definition: A container for a value that will be delivered asynchronously in the future.
// OR simply "a container/placeholder for a future value".
// And a perfect example of a future value is response from an AJAX call.

// Example # 1:
const getData = (page) => {
   fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page)
   .then(response => response.json())  // json() also returns a promise
   .then((data) => {
      const input2 = data[0];          // just for example 
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
      // This will again return a promise as a fulfilled value.
   })
   .then(response => response.json()) // we need to do this all the time to parse the response body from previous promise.
   .then(data => console.log(data));
};
getData(2);

// But But But, callback hell is still possible in this scenario and still it will be difficult to guess,
// which promise it didnt go through.
// And thats when we "Handle Rejected Promises".

// Handling Rejected Promises.
// Syntax: 
// then(<callback_for_fulfilled_promise>, <callback_for_rejected_promise>)
// e.g.
// .then(data => console.log(data), err => console.error(err));
const getData = (page) => {
   fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page)
   .then(response => response.json() , (err) => console.error(err))
   .then(
      (data) => {
         const input2 = data[0];          // just for example 
         if (!input2) return;
         return fetch("https://xyz.com/api/somedata/"+input2);
      }, (err) => console.error(err)
   )
   .then(response => response.json(), (err) => console.error(err))
   .then(data => console.log(data), (err) => console.error(err));
};

getData(2);
// Now we can find where our code is problematic, if anything goes wrong.

//////////////////////////////////////////////////////////////
// catch()

// But in above example, writing  , (err) => console.error(err) again and again in every then() is a pain.
// We can write all the error handling at the end of our "promises chain" using catch() method.
// It catches error at every stage of the promise chain.
// 
// catch(<callback to handle rejected promises in a chain.>)
const getData = (page) => {
   fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page)
   .then(response => response.json())
   .then((data) => {
      const input2 = data[0];
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.error(err.message)); //Every "error object" has a property called 'message'.
};
getData(2);

//////////////////////////////////////////////////////////////
// finally()

// finally method - always called at the end. no matter whether promise is fulfilled or rejected.
const getData = (page) => {
   fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page)
   .then(response => response.json())
   .then((data) => {
      const input2 = data[0];
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.error(err.message)) //Every "error object" has a property called 'message'.
   .finally(()=>{
      // always executes
      hideLoadingSpinner();   // just for example.
      // finally is useful to hide the loading gif/img after the ajax/fetch is finished.
   });
};
getData(2);

//////////////////////////////////////////////////////////////
// Reject Promises Manually by throwing errors.

// Sometimes the error 404 is also considered as a fulfilled promise. 
// because its a proper response given by server.
// and it is not caught by catch() and the promise is not rejected.

// We can manually throw errors, to reject promises manually in certain cases like 404.
const getData = (page) => {
   fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page)
   .then(
      response => {
         console.log(response.status); // 404
         if(!response.ok){
            // "ok" property of response of fetch() is either "true" on success or "false" otherwise.
            
            throw new Error("My Custom error Message " + response.status); 
            // Error() above is a constructor function to create Error Object in javascript. FYI
            // Now if this error is thrown, this promise will be immediately rejected. 
            // and the enclosing then()'s promise will be rejected. and that's what we want.
            // and this propogates down to the catch().
         }
         response.json()
      })
   .then((data) => {
      const input2 = data[0];
      if (!input2) return;
      return fetch("https://xyz.com/api/somedata/"+input2);
   })
   .then(response => response.json())
   .then(data => console.log(data))
   .catch(err => console.error(err.message)) //Every "error object" has a property called 'message'.
   .finally(()=>{
      // always executes
      hideLoadingSpinner();   // just for example.
      // finally is useful to hide the loading gif/img after the ajax/fetch is finished.
   });
};
getData(2000); // passed a value(2000) for which data doesn't exist, so that we get 404.


