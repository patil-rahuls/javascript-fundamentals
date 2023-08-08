//////////////////////////////////////////////////////////////
// PROMISES & FETCH API [ES 6] ///////////////////////////////
//////////////////////////////////////////////////////////////

// Promises : Its a powerful and elegant soution to handle asyncrounous code.
// Also a better way to write Ajax calls is using fetch() function which returns a Promise.

//  Example #1:
const result = fetch("https://xyz.com/api/somedata");
console.log(result);
// Promise {<pending>}

// We see that fetch() returns a "Promise" and inside curly braces, we see its state - pending
// That means it is fetching the data from the url in the background.
// If we console.log(result) after sometime, we may get (if the request has been completed in the background).
// Promise {<fulfilled> : Response}

// Formal Definition: Promise is an object, used as a placeholder for the future result of an asynchronous operation.
// Informal Definition: A container for a value that will be delivered asynchronously in the future.
// OR simply "a container/placeholder for a future value".
// And a perfect example of a future value is response from an AJAX call.

// The advantage of this pattern is that we do not need to rely on events and callbacks passed into
// asynchronous functions to handle asynchronous results.

// Instead of nesting callbacks, we can *chain promises* for a sequence of asynchronous operations
// thus escaping callback hell.

// Since Promises work with asynchronous operations, they are time sensitive.
// So they change their state over time.

// Promise Lifecycle
// 1. Pending (Before the value is available.)
// 2. Settled (When asynchronous task is finished.)
// 3. > Fulfilled (When the value is available after 'Settled' state)
// 4. > Rejected (If an error occur after 'Settled' state)

// Also, we are able to handle these different states in our code.

// We first "Build a Promise" e.g. fetch()
// and then "Consume a Promise" when we already have a promise returned from Fetch API.
