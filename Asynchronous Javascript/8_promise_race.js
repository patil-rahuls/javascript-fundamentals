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

// Promise 3
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
