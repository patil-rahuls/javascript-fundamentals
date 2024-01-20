//////////////////////////////////////////////////////////////
// OBJECT'S getter and setter ////////////////////////////////
//////////////////////////////////////////////////////////////

// Every Object in Javascript has two important properies :
// getter "get()" and setter "set()"

// IMP: Remember! they are "properties", not "methods"

const myObj = {
    firstName : 'Rahul',
    lastName : 'Patil',

    // getter
    get info(){
        return `Full Name : ${this.lastName}  ${this.firstName}`;
    },

    //setter should have ONE parameter COMPULSORY
    set info(lName){
        this.lastName = lName;
    }
};

myObj.info;             // We didn't use parens here like this myObj.info();
// We access the getter just like a property.

myObj.info = "P";       // No parens here too.

// Poymorphism Achieved Here? I know 'info' here is a property and not function,
// but at the end, what we get is a 'functionality' out of it !!

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
// because we cant use the same property name because it will result in Error.

class User {
    constructor(username){
        this.username = username;
    }

    format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    set username(input){
        // this.format.test(input) ? this.username = input : console.error("Username should have at least one special character.");
        this.format.test(input) ? this._username = input : console.error("Username should have at least one special character.");
    }
};

// In the above code the commented line will give error because, the same class variable 'username'
// is being initialized by two methods: the constructor and the setter.
// This results in  "max stack call size exceed error".
//
// Hence inside setter, we assign the value to a new variable "_username". Adding '_' is a convention to create a new variable.

const u1 = new User("Deepika");
const u2 = new User("Deepika@123");

// TIP: We can have more than one getters and setters in an ES6 class/Constructor function.
