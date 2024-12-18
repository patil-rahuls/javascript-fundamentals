//////////////////////////////////////////////////////////////
// STATIC ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

//  Example #1:
Array.from()
// the *Array.from()* is a static function of Array constructor function 
// it is not present on the prototype property of Array.

// [1,2,3,4].from(); will not work
// meaning, its not accesible to objects created from Array constructor fn.
// But it is accesible directly from Array constructor fn.

//  Example #2:
Number.parseFloat(12);
// These(static methods) are made so as to keep them linked to Array only.

// We can have such static methods in our user defined ES6 classes or constructor functions.

//  Example #3: Static method in constructor function.
const Student = function(){
    // ...
}
// Add a static method.
Student.hey = function(){
    console.log("Hey There !");
    this.age = 29;  // this inside static method points to current CLASS/Constructor Function.
}

// Static method call
Student.hey();      // We are calling it through Class and not by any object.
// Just like normal static methods we have in C++ Java and PHP.

s1.hey();           // Error: s1.hey is not a function.
// Because hey() is simply not in Student prototype object.

// Static methods just like in any other programming languages, are called by the Class directly.

// 'this' in static method points to the constructor fn.
Student.hey = function(){
    console.log("Hey There !");
    console.log(this);              // Prints the constructor function. Because, its the constructor that's calling this method.
}

//  Example #4: Static method in ES6 Classes
class Student {
    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    // Methods in ES6 classes are added to .prototype property of the Student Class
    show(){
        console.log(`${this.name}'s Roll No. is ${this.rollNo}`);
    }
    // No comma here OR after a method in ES6 class
    show2(){
        // ...
    }
    // static mehod
    static hey(){
        console.log("Heyy");
    }
};

Student.hey();
// The show() and show2() are called instance methods and are added to the prototype property of Student class.
// On the other hand, hey() is a static method and it is added to the Student Class iself

// Same aplies to classes defined using constructor functions.
// We use static methods to create helpers of class/constructor fns.

// For Arrays, why there are static methods like .from(), .filter() etc? Why they were not added 
// to prototype property of Array constructor function? - Homework :)
