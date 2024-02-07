//////////////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS [ES6] ////////////////////////////
//////////////////////////////////////////////////////////////

// Literals represent values in JavaScript.
// These are fixed values not variables that you literally provide in your script.
// e.g. "foo", "bar", "1234" are string literals.

// A better way to write javascript objects with the new ES6 syntax.

//  Example #1:
// Computed Properties and Object Literals
var name = "make";
var i = 0;
const laptop = {
    [name + ++i]: "Apple",
    [name + ++i]: "Dell",
    [name + ++i]: "HP"
}
console.log(laptop.make1);          //"Apple"
console.log(laptop.make2);          //"Dell"
console.log(laptop.make3);          //"HP"


//  Example #2:
// Shorthand for writing Methods and Properties
let name = 'Twilight';
const myObj = {
    myFunc:function(param1, param2){
        return [param1 , param2];
    },

    // method myFunc() can be re-written as follows.
    myFunc(param1, param2){
        return [param1 , param2];
    },
    //i.e. removed the colon and function keyword

    name,                           // An outside object
    newName : name,                 // An outside object using a different property name.
};
