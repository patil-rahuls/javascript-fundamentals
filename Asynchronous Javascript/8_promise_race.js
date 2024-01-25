//////////////////////////////////////////////////////////////
// PROMISES RACE /////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Promise Combinators: race, allSettled and any
// Promise Combinators are methods that operate on multiple promises and return a new promise.
// Three Promise Combinators: Promise.race, Promise.allSettled and Promise.any

// 1. Promise.race(iterable) Example-
// Promise 1
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1'), 1000);
});

// Promise 2
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error Promise 2'), 2000);
});

// Promise 3 (an async function)
const promise3 = async () => {
  const response = await fetch('https://reqres.in/api/users?page=1');
  return response.json(); // We don't need to write 'await' while writing return statement.
};

/* Old way - using then()
Promise.race([promise1, promise2, promise3()])
  .then(result => {
    // result is the value of the first settled promise
    console.log(result);
  })
  .catch(error => {
    // error is the reason of the first settled promise if it rejected
    console.error(error.message);
});
*/

const result = await Promise.race([promise1, promise2, promise3()]);
// notice the third element of the above array provided to Promise.race(). Its an async fn.

// Example: 2
// Promise 1
const promise_1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 1'), 2000);
});

// Promise 2
const promise_2 = new Promise((resolve, reject) => {
  setTimeout(() => reject('Error Promise 2'), 2000);
});

// Promise 3
const promise_3 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Promise 3'), 2000);
});
const res = await Promise.race([
  promise2,
  promise1,
  promise3
]);
// Observe the Order in which I have added the promises in the array passed to the Promise.race().
// Output -
// Promise 1

// IMP -
// The order of the promises in the array you give Promise.race DOES NOT MATTER.
// In the above code, the first promise (time-wise) to settle is Promise 1,
// because you're scheduling three timeouts in a row, all of them with a timeout of 2000ms,
// so the first one scheduled is the first one that gets called,
// thereby resolving its promise first (time-wise).

// More here -
// https://stackoverflow.com/questions/77850907/promise-race-returning-resolved-promise-instead-of-first-rejected-promise