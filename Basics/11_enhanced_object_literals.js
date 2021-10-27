//////////////////////////////////////////////////////////////
// ENHANCED OBJECT LITERALS [ES 6] ///////////////////////////
//////////////////////////////////////////////////////////////

// A Better way to write javascript objects (new es6 syntax).

// Computed Properties and Object Literals
var name = "make";
const laptop = {
    [name]: "Apple"
}

console.log(laptop.make);           //"Apple"

// Another example:
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

// Shorthand for writing Methods and Properties
const myObj = {
    myFunc:function(param1, param2){
        return [param1 , param2];
    },

    // method myFunc() can be re-written as follows.
    myFunc(param1, param2){
        return [param1 , param2];     
    }, 
    //i.e. removed the colon and function keyword

   workingHrsObj,                   // An outside object
   newWorkingHours : workingHrsObj, // An outside object using a different property name.
};
