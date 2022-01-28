//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECT - length  ////////////////////////
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
        this.age = 2049-2021;   // property "age" is mutated here.
        return this.age;
    }
};

// Size of an object is the number of properties it holds.
let size = Object.keys(myObj).length;
console.log(size);              // 6


