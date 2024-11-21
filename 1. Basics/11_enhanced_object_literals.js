//////////////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS [ES6] ////////////////////////////
//////////////////////////////////////////////////////////////

// Literals represent values in javascript.
// These are fixed values not variables that you literally provide in your script.
// e.g. 
let name = "foo"        // "foo" is a string literal
let age = 29            // 29 is a number literal
let stu = { name, age}; // { name, age } is an Object Literal

// A better way to write javascript objects with the new ES6 syntax could be as follows.

//  Example #1:
// Computed Properties
const attribute = "make";
let i = 0;
const laptop = {
    [attribute + ++i]: "Apple",
    [attribute + ++i]: "Dell",
    [attribute + ++i]: "HP"
}
console.log(laptop.make1);          // "Apple"
console.log(laptop.make2);          // "Dell"
console.log(laptop.make3);          // "HP"


//  Example #2:
// Shorthand for Methods and Properties
let film = 'Twilight';
const myObj = {
    myFunc: function(param1, param2){
        return [param1 , param2];
    },

    // method myFunc() can be re-written as follows.
    myFunc (param1, param2){
        return [param1 , param2];
    },
    //i.e. removed the colon and function keyword

    film,                           // An outside object
    movie: film,                    // An outside object using a different property name.
};
