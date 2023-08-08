//////////////////////////////////////////////////////////////
// RETURNING VALUE FROM ASYNC ////////////////////////////////
//////////////////////////////////////////////////////////////

const myFunc = async function(page) {
    const response = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page);
    const data = await response.json();  // json() also returns a promise
    // console.log(data);
    return data;
};

console.log("First");
const d = myFunc(2);
console.log(d);
console.log("Last");

// Output :
// First
// Promise {<pending>}
// Last

// It prints Promise and not the final value, because at this point of code,
// javascript has no way of knowing the value of 'data' variable yet.
// Hence it returns a promise.


console.log("First");
// const d = myFunc(2);
// console.log(d);
myFunc(2).then(val=> console.log(val));
console.log("Last");

// Output:
// First
// Last
// {...}

// Catching errors from async function.
const myFunc2 = async function(page) {
    try{
    const response = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page);
    const data = await response.json();  // json() also returns a promise
    // console.log(data);
    return data;
    }catch(err){
        console.log(err.message);
    }
};
// Suppose there is some error in the api,
console.log("First");
myFunc2(2).then(val=> console.log(val)).catch(err => console.log(err));
console.log("Last");
// using catch above, we will still not get the error. and it will print undefined.
// to fix that, we need to throw the error manually in the try catch block in the async function.

const myFunc3 = async function(page) {
    try{
        const response = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page);
        const data = await response.json();  // json() also returns a promise
        // console.log(data);
        return data;
    }catch(err){
        console.log(err.message);
        throw err;
    }
};
// Now we can catch the errors thrown by async function.
myFunc3(2).then(val=> console.log(val)).catch(err => console.log(err));
// And we can also have finally() in our chain.
myFunc3(2).then(val=> console.log(val)).catch(err => console.log(err)).finally(() => console.log("executed"));

// We can also have async IIFE that looks lot cleaner than above chain.
(async function(){
    try{
        const response = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page);
        const data = await response.json();  // json() also returns a promise
        console.log(data);
    }catch(err){
        console.log(err.message);
    }
})();
// Now we dont need to manually throw error as its an IIFE.
// Tips: await can only be used inside an async function AND NOT ANYWHERE ELSE.
