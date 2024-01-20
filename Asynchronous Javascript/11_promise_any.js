//////////////////////////////////////////////////////////////
// PROMISES any //////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Promise.any(iterable):
// Returns a new promise that resolves with the value of the first fulfilled promise in the iterable.
// If all promises are rejected, it rejects with an AggregateError containing an array of rejection reasons.

// Promise.any() takes an array of promises and returns a new promise that resolves as soon as one of the
// input promises resolves. If all input promises reject, Promise.any() returns a rejected promise.

  const promise1 = new Promise((resolve, reject) => {
    setTimeout(reject, 500, 'Promise 1');
  });

  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Promise 2');
  });

  Promise.any([promise1, promise2])
    .then(result => console.log(result)); // Output: 'Promise 2'