//////////////////////////////////////////////////////////////
// OBJECT'S getter and setter ////////////////////////////////
//////////////////////////////////////////////////////////////

// Every Object in Javascript has two important properies : 
// getter and setter
// Remember they are properties, not methods.

// TIP: setters can be used for input validation.

const myObj = {
    firstName : 'Rahul',
    lastName : 'Patil',
    
    // getter
    get info(){
        return `Full Name : ${this.lastName}  ${this.firstName}`;
    },

    //setter - at least one parameter required.
    set info(lName){
        this.lastName = lName;
    }
};

myObj.info;             // We didn't use parens here like this myObj.info();
// We access the getter just like a property. 

myObj.info = "P";       // No parens here too.

//////////////////////////////////////////////////////////////
// CLASS'S getter and setter /////////////////////////////////
//////////////////////////////////////////////////////////////

// Classes also have getter and setter.
// getter and setter are actually properties.

class Student {

    constructor(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }

    get info(){
        return this.name;
    }

    set info(nm){
        this.name = nm;
        this._name = nm;
    }
};

const s4 = new Student("Test", 20);
s4.info = "Hitesh";                  // since the getter and setter are both property and not methods.
s4.info;

// TIP: Use setters for input validation.
// Condition: the setter method name should be same as the parameter's name in contructor() which need to be validated.
// Also, if valid, we need to set the value to new property, 
// because we cant use the same property name because it will result in "max stack call size exceed error".

class User {
    constructor(username){
        this.username = username;
    }
    
    format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/; // no need t use this keyword here.

    set username(input){
        // but here we must use 'this' keyword for property 'format'.
        this.format.test(input) ? this._username = input : console.error("Username should have at least one special character.");
    }
};

const u1 = new User("Deepika");
const u1 = new User("Deepika@123");
 