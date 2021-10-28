//////////////////////////////////////////////////////////////
// How do we create objects ?
//////////////////////////////////////////////////////////////
// 1. constructor functions
// 2. ES6 Classes
// 3. Object.create()

// 1. constructor functions
// creates objects from function.
// This is how built-in objects like Arrays, Maps or Sets are actualy implemented.
// new Array(...), new Set(...) , new Map(...) These are all constructers.

// 2. ES6 Classes
// work exactly like constructor functions.
// Not like traditional OOP classes.
// They are just an abstraction over the constructor functions.

// 3. Object.create()
// Easiest and straightforward way to link an object to a prototype object.
//////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// 1. constructor functions
//////////////////////////////////////////////////////////////

// We can create our own constructor functions.
// Convention - Constructor functions start with Capital letter. (new Map() , new Array(), new Set() .. etc.)
// Arrow Functions are not used to create constructor functions, because they dont have their own 'this' keyword.

// We create a constructor functions like a regular function (First Letter Capital)
const Student = function (name , rollNo) {
    // ...
};
// We call it with the "new" operator.
new Student('Rahul', 1);

// The Magic is in "new" keyword above. 4 things hapepn:
// 1. New {} empty obj is created.
// 2. The function is called. And this referes to the empty obj {}
// 3. {} empty obj is linked to the prototype.
// 4. function now returns the object {} (which no longer remains empty by now)

const Student = function (name , rollNo) {
    // This will print an empty object of type "Student"
    console.log(this);                  // Student {}
};
// We call it with the "new" operator.
new Student('Rahul', 1);

// Lets create some properties in the object.
const Student = function (name , rollNo) {
    // Instance Properties
    this.name = name;
    this.rollNo = rollNo;

    // Method inside a constructor function. 
    // NEVER DO THIS - Because if we create 1000s of instances of Student using this constructor,
    // then each of these 1000 obj would have this function's copy.
    this.show = function(){
        console.log("Roll No: " + this.rollNo + " _ Name: " + this.name);
    }
};
// We call it with the "new" operator.
const s1 = new Student('Rahul', 1);

console.log(s1);                        // Prints the Student Object.

// We didnt technically created a class here and didn't instantiated it.
// However we did create a object from a constructor function. 

// So we can say s1 is an instance of Student.
console.log(s1 instanceof Student);     // true

