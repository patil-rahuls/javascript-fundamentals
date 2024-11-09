//////////////////////////////////////////////////////////////
// CONSTRUCTOR FUNCTIONS /////////////////////////////////////
//////////////////////////////////////////////////////////////

// IMP: Arrow Functions are not used to create constructor functions,
// because they don't have their own 'this' keyword.

// We create a constructor function like a regular function.
// The only conventional distinction is that the first letter is capital.
// and we get a 'this' keyword inside it.

const Student = function (name , rollNo) {
    this.name = name;
    this.rollNo = rollNo;
};
const stu = new Student('Rahul', 1);

// 'Student' is a Constructor Function.
// 'stu' is a newly created Object of 'Student'.
// 'this' refers to the Object 'stu'.
// Before looking into this code's execution, lets understand *prototype*.

// Each and every function(object) in javascript automatically has a property called "prototype".

// Student constructor function too will have a prototype property "Student.prototype".
// "Student.prototype" is NOT the *Prototype Object* of Student constructor function.
// It is a prototype of objects created using Student constructor function, i.e. "stu".

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _________________                                          _______________________
// |                 |----------- Student.prototype --------->|                       |
// | Constructor Fn. |                                        | Prototype (of "stu")  |
// |  [ Student() ]  |<---- Student.prototype.constructor ----|  [Student.prototype]  |
// |_________________|                                        |_______________________|
//                                                                        ^
//                                                         Prototypal     |
//                                            ^            Inheritance/   |  .__proto__
//                                            |             Delegation    |
//                            Prototype Chain |              _____________|________________
//                                            |             |                              |
//                                            |             |           Object             |
//                                                          |          ["stu"]             |
//                                                          | name     : "Rahul"           |
//                                                          | rollNo   : 1                 |
//                                                          | __proto__: Student.prototype |
//                                                          |______________________________|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// "Student.prototype" itself has a property called ".constructor".
// Its nothing but the constructor function itself i.e. Student().

// In Javascript, any object's *Prototype* is actually "__proto__" property.
// So, "stu.__proto__" i.e. "Student.prototype" is a *Prototype* of "stu" Object.
// And this way, an object is linked to the Constructor function's prototype property.

// So here are the 4 events that happen.

// 1. An {} empty obj ("stu") is created.

// 2. 'this' keyword in the Constructor function call is set to the newly created object "stu".
//    That means, the 'this' object inside the execution context of the constructor fn
//    now points to that new object "stu".

// 3. The new object "stu" is linked to the constructor function's prototype property as a result 
//    of creation of a new property called "__proto__" property.

// 4. The new object "stu" is returned from the constructor function call.


const Student = function (name , rollNo) {
    // This will print an empty object of type "Student"
    console.log(this);                  // Student {}
};
// We call it with the "new" operator.
new Student('Rahul', 1);

// Lets create a method in the object.
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
// However, it looks like we are instantiating a class, as compared to other programming langs.

// So we can say s1 is an instance of Student.
console.log(s1 instanceof Student);     // true
