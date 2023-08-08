//////////////////////////////////////////////////////////////
// ASYNC/AWAIT ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Special kind of function.

const myFunc1 = async function(param){
    // Here inside async fn, we can have one or more await function.
    // Syntax:
    // await <Promise Object>
    await fetch("https://deelay.me/5000/https://reqres.in/api/users?page=2"); // fetch will return a promise.
    // This awaits for the result from this promise untill the data has been fetched.

};
// Does this block the execution ? No, because this is running asynchronously in the background.
// This makes our code(function) look clean like regular function.

// once the result from await is achieved, it can be stored to a variable.
// The above fn can be re-written as
const myFunc2 = async function(page){
    const val = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page);
    console.log(val);
};
myFunc2(2);
console.log("This will be printed first.");

// Output:
// "This will be printed first."
// {...}

// async-await is simply a syntactic sugar to the then() method. It can be reviewed as :
const myFunc3 = async function(page){
    fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page)
    .then(cal=>console.log(val));
};

// Actually the promise from fetch method will be datastream so we need .json() on it.
const myFunc4 = async function(page) {
    const response = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page);
    const data = await response.json();  // json() also returns a promise
    console.log(data);
};
myFunc4(2);
// Promise {<pending>}
// {...}  // printed after 5 seconds once data is fetched from the API.

// And we can always write try catch block to catch any errors in any of the promis states.
// try {
//     await ...
            // if(some condition)
            //     throw new Error("My New custom error");
//     await ...
//     await ...
// }catch(err){
//      console.log(err.message);
// }
