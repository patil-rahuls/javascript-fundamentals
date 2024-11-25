//////////////////////////////////////////////////////////////
// PROTOTYPES & PROTOTYPAL INHERITANCE ///////////////////////
//////////////////////////////////////////////////////////////

// Earlier we saw that its a bad practice to have a function inside a constructor function.
// To tackle that situation, we use Prototype object.

// Prototypes allow you to easily define methods to all instances of a particular object.
// The beauty is that the method is applied to the prototype, so it is only stored in the memory ONCE,
// but every instance of the object has access to it.

// *Prototype* (Revision)
// Each and every function(object) in javascript automatically has a property called "prototype".
// So the "Student" constructor function also has a prototype property.
Student.prototype;

// We add methods to this prototype object.
Student.prototype.show = function(){
    console.log("Roll No: " + this.rollNo + " _ Name: " + this.name);
    // 'this' will point to the object which will be calling this method.
};
// Now all instance of Student will have direct access to the show() of the prototype property.
stu.show();

// Using prototype there exists only one copy of show() available to all instances of Student.

// Exaplanation:
// In "Student.prototype" the "prototype" is not the Student's prototype.
// Its a property. Its a Prototype of objects that will be created from Student's constructor.
// Using isPrototypeOf() we can check which property is a prototype of an Object.

s1 = new Student('Hitesh', 33);
s2 = new Student('Aajesh', 28);
s3 = new Student('Rahul', 28);
console.log( Student.prototype.isPrototypeOf(s1) );                 // true
console.log( Student.prototype.isPrototypeOf(s2) );                 // true
console.log( Student.prototype.isPrototypeOf(s3) );                 // true
console.log( Student.prototype.isPrototypeOf(Student) );            // false

// "Student.prototype" is a prototype of the created objects Not the prototype of "Student" constructor fn.
// See it as 'Student.prototypeOfLinkedObject'

// Not just methods, we can also set properties on prototype
Student.prototype.school = "KV INS HAMLA, MUMBAI";
console.log(s1.school);
console.log(s2.school);
// Remember this property "school" is not seen in Student Object. i.e. its not School's own property.
// But it is School.prototype's property.
// Using hasOwnProperty() we can check whether a Constructor function has its own property
console.log(Student.hasOwnProperty('name'));        // true
console.log(Student.hasOwnProperty('school'));      // false
// false because "school" is not inside Student object.
// It simply has access to it because it is in the prototype property of Student.


// *__proto__*
// Every object in javascript has a property called *__proto__*
// It is called a *Prototype*

// Remember the step 3 : {} empty object is linked to prototype.
// It creates *__proto__* property.

console.log(s1.__proto__ === Student.prototype); // true;
// *__proto__* of objects created from constructor functions are same as prototype property of the constructor.


//  Example:
const Car = function(make, speed){
    this.speed = speed;
    this.make = make;
};
Car.prototype.accelerate = function(){
    this.speed++ && console.log(this.speed);
};
Car.prototype.break = function(){
    this.speed-- && console.log(this.speed);
};

const BMW = new Car("BMW", 120);
const Mercedes = new Car("Mercedes", 95);

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
