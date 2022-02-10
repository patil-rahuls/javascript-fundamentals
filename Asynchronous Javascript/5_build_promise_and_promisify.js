//////////////////////////////////////////////////////////////
// BUILD PROMISE /////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Creating a new Promise
// Created using Promise Constructor.
// It takes exactly one argument the 'executor' function. This 'executor' function has 2 parameters
// these parameters are actually functions - resolve() and reject()

const newPromise = new Promise(function(resolve, reject){
    // This executor fn should return a resolved value.

    if( true ){ // just for example.
        // Code for Fulfilled Promise goes here.
        resolve("My Name is Rahul"); // "My Name is Rahul" string will be available to the then() function.
        // resolve() is called to set the Promise as Fulfilled.
        // and the 'to be' fulfilled value is passed to the resolve() function.
    }
    else{
        // Code for Rejected Promise goes here.
        reject("My Error Message"); // "My Error Message" string will be available to the catch() function.
        // reject() is called to set the Promise as Rejected.
        // and the Error Message/Value is passed to the reject() function.
    }
});

// Consuming the Promise.
newPromise.then(result=>console.log(result)).catch(err=>console.error(err));
// Observe that We didn't use .json() function here.

// However, this is not asynchronous.

// Let's Modify it.
const newPromise = new Promise(function(resolve, reject){
    console.log("Processing...");
    setTimeout(()=>{
        if( true )
            resolve("My Name is Rahul");
        else
            reject(new Error("My Error Message")); // This is a good idea, as it prints out on console like error.
    }, 2000);
    
});

// Output: 
// Processing...
// 'My Name is Rahul' // this gets printed after 2 seconds.

//////////////////////////////////////////////////////////////
// Promisifying

// Promisifying - converting callback based asynchronous behaviour into promise based.

// Promisifying setTimeout()
const wait = function(seconds){
    return new Promise(function(resolve){
        setTimeout(resolve, seconds*1000);
    });
};
// Using arrow fn.
const wait = seconds => new Promise(resolve=>setTimeout(resolve, seconds*1000)); 

wait(4).then(function(){
    console.log("I waited for 4 Seconds.");
});

// More Fun :
wait(4).then(function(){
    console.log("I waited for 4 Seconds.");
    wait(1); // This will return another promise.
}).then(() => console.log("I waited for another 1 Second"));

// This Prevents Callback hell, also the code looks readable.

// Build a Promise and Resolve immediately.
Promise.resolve('abc').then((x)=>{ console.log(x) }); // abc
Promise.reject(new Error('something')).then((x)=>{ console.log(x) }); // Error: something


