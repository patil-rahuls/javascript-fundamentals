//////////////////////////////////////////////////////////////
// PROMISES RACE /////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Some scenarios in Promise.race

// 1. When all Promises' execution time is same(say by coincidence).
try{
  const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1'), 2000);
  });

  // Promise 2
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Error Promise 2'), 2000);
  });

  // Promise 3
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Error Promise 3'), 2000);
  });

  const result = await Promise.race([promise1, promise2, promise3]);
  console.log(result);
} catch(err){
    console.error(err.message);
}
// Output:
// Promise 1
// When the execution time of all the Promises in Promise.race() is same, then
// the first Promise's result gets returned.
// If that first Promise gets resolved, it simply returns the resolved value.
// If it gets rejected, it gets caught in the catch.


// 1. When all Promises' execution time is same(say by coincidence).