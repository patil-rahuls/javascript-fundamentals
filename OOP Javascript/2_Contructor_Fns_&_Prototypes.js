//////////////////////////////////////////////////////////////
// CONSTRUCTOR FUNCTIONS /////////////////////////////////////
//////////////////////////////////////////////////////////////

// We can create our own constructor functions.
// Convention - Constructor functions start with Capital letter. (new Map() , new Array(), new Set() .. etc.)
// IMP: Arrow Functions are not used to create constructor functions, because they dont have their own 'this' keyword.
// in Arrow functions, 'this' points to global object.

// We create a constructor functions like a regular function.
// The only distinction is that the first letter is capital and 
const Student = function (name , rollNo) {
    this.name = name;
    this.rollNo = rollNo;
};
// We call it with the "new" operator.
const stu = new Student('Rahul', 1);

// The Magic is in "new" keyword above. 4 things happen:
// Before looking into these 4 events, lets understand that every object has a property.
// Student() constructor function will have a proerty ".prototype". Its value is nothing but prototype of the objects created using Student() constructor function.
// We can access it like this : "Student.prototype"

// Similarly, "Student.prototype" itself has a property called ".constructor". Its value is nothing but the constructor function itself i.e. Student().

// And, again, the object created using constructor funtion "stu" also has a property called ".__proto__" which is "linked" to constructor function's prototype i.e. "Student.prototype"

// So here are the 4 events that happen.
// 1. An {} empty obj is created. [ Object [stu] ]
// 2. The 'this' object is linked to this newly created obj {} and its properties now point to 'this' object.
//    That means, inside the execution context of the constructor fn, 'this' points to that empty object.
//    And because we have the parameters 'Rahul' and '1', eventually, these are set to the 'this' object.
// 3. Then this newly created object is linked to the constructor function's prototype property. "Student.prototype"
// 4. function now returns the object {} (which no longer remains empty by now) to the object 'stu'.
// The Student.prototype is now the prototype of "stu" object.

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

