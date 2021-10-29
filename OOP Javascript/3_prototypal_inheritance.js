//////////////////////////////////////////////////////////////
// PROTOTYPES
//////////////////////////////////////////////////////////////

// Earlier we saw that its a bad practice to have a function iside a constructor function.
// To tackle that sitation, we use Prototype object.

// Every object in javascript has a property called "prototype".
// So the objects created from constructor function also have prototype property.
Student.prototype;

// Now we can add function to this prototype object.
Student.prototype.show = function(){
    console.log("Roll No: " + this.rollNo + " _ Name: " + this.name);
    // 'this' points to the object which is calling this method.
};
// Now show() is accessible from the prototype property.
console.log(Student.prototype);

// Now all instance of Student will have direct access to the show() of the prototype property.
Student.show();

// Using prototype there exists only one copy of show() available to all instances of Student.

// Exaplanation:
// In "Student.prototype" the "prototype" is not the Student's prototype. Its a property. Its a Prototype of objects that will be created from Student's constructor.
// Usng isPrototypeOf() we can check which property is a prototype of an Object.

s1 = new Student('Hitesh', 33);
s2 = new Student('Aajesh', 28);
s3 = new Student('Rahul', 28);
console.log( Student.prototype.isPrototypeOf(s1) );                 // true
console.log( Student.prototype.isPrototypeOf(s2) );                 // true
console.log( Student.prototype.isPrototypeOf(s3) );                 // true
console.log( Student.prototype.isPrototypeOf(Student) );            // false

// "Student.prototype" is a prototype of the created objects Not the "Student".
// See it as 'Student.prototypeOfLinkedObject'

// Also see __proto__
// Remember the step 3 : {} empty object is linked to prototype.
// It creates __proto__ property.


// Not just methods, we can also set properties on prototype
Student.prototype.school = "KV INS HAMLA, MUMBAI";
console.log(s1.school);
console.log(s2.school);

// Remember this property "school" is not seen in Student Object.
// 
console.log(Student.hasOwnProperty('name'));        // true
console.log(Student.hasOwnProperty('school'));      // false
// false because "school" is not inside Student object. 
// It simply has access to it because its in prototype property of Student.

// Every object in javascrpt has a property called __proto__
// It is not a prototype property, but simply is a prototype.

console.log(s1.__proto__ === Student.prototype); // true;
// __proto__ of objects created from constructor functions are same as prototype property of the constructor.

// in "Student.prototype", the prototype is not os Student, but its the prototype of the obejcts that are going to be created from the Student.
console.log(Student.prototype.isPrototypeOf(Student));  // false
console.log(Student.prototype.isPrototypeOf(s1));       // true

// in "s1.__proto__" the __proto__ is actually prototype of s1 object.


//////////////////////////////////////////////////////////////

// Now you can add a new function to existing Object prototypes.
// Extending a prototype of a Built-in object - NOT RECOMMENDED.
Array.prototype.unique = function(){
    console.log(`This is my custom function which can be accessed by all the arrays.`);
    return [...new Set(this)]; // this points to 
}

const arr = [3,43,8,547,58,87,8,32,21,23,75,8,8,3,2,];
console.log(arr.unique());
// This is my custom function which can be accessed by all the arrays.
// (11) [3, 43, 8, 547, 58, 87, 32, 21, 23, 75, 2]

// NOT RECOMMENDED - 
// Next JS version may get a new method with same name as yours, Your code will use that new method.
// AVOID IT. And try to use the built in functions and methods.

