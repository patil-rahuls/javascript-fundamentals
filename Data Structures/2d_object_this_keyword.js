//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECT - 'this' KEYWORD /////////////////
//////////////////////////////////////////////////////////////

// Consider this object as an example.
const myObj = {
    firstName : 'Rahul',
    lastName : 'Patil',
    age : 0,
    veg:true,
    greet: function(user){
        console.log(`Hello '${user}' !! What up !`);
    },
    // greet() can also be written simply as commented below
    // greet(user){
    //     console.log(`Hello '${user}' !! What up !`);
    // },

    myAge(){
        this.age = 2049-2021;   // this object's property "age" is mutated here.
        return this.age;
    }
};

// The "this" keyword:
// Just like most the programming languages, "this" refers to the current Object.
// i.e. it points to the current object.

// We use this keyword to access the current object’s properties.
myObj.info = function(){
    return `I am ${this.firstName} ${this.lastName}. I am ${this.myAge()} years old.` ;
}; // "this" refers to object "myObj"

myObj.info();
