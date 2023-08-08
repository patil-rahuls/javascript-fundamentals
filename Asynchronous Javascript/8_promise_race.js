//////////////////////////////////////////////////////////////
// PROMISES RACE /////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Always use try catch block with async functions.

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promise 1'), 1000);
    });

    const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => reject('Error Promise 2'), 2000);
    });

    const promise3 = async () => {
    const response = await fetch('https://example.com/api/data');
    return response.json();
};

promise.race([promise1, promise2, promise3()])
  .then(result => {
    // result is the value of the first settled promise
    console.log(result);
  })
  .catch(error => {
    // error is the reason of the first settled promise if it rejected
    console.error(error);
});
