//////////////////////////////////////////////////////////////
// ES6 CLASSES ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Classes in javascript are just syntactic sugars.

// class expression - just like function expression
Student = class{
    // ...
};

// class declaration  - just like function declaration
class Student {

    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    // Methods in ES6 classes are added to .prototype property of the Student Class
    show(){
        console.log(`${this.name}'s Roll No. is ${this.rollNo}`);
    }

    // No comma here OR after a method in es6 class
    show2(){
        // ...
    }
};

// show() is stored in the Student class's prototype and not in the Student class.
// 

const s3 = new Student("Aajesh", 29);
s3.show();

console.log(s3.__proto__ === Student.prototype); 
// true

// Manually add a method to the prototype.
Student.prototype.greet = function(){
    console.log(` Hii ${this.name} !!`);
};

// Classes In Javascript actually hide the true nature of prototypal inheritance

// 1. classes are not hoisted, even if they are declarations
// 2. like functions, classes are also first class citizens.
//      that means, we can pass them to functions and return them from functions.
//      this happens because classes are basically special kinds of functions behind the scenes.
// 3. Classes are executed in "strict mode". even though u haven't activated the strict mode.

// Constructor functions vs es6 classes ?
// Its a personal preference.
// Classes looks a lot better as everything is in one block, 
// even though the class's methods point to .prototype property, still they are kept inside class, 
// so the code looks good.

