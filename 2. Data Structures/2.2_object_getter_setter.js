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

    // setter must have exactly ONE parameter COMPULSORY.
    set info(lName){
        this.lastName = lName;
    }
};

myObj.info;             // We didn't use parens here like this myObj.info();
// We access the getter just like a property.

myObj.info = "P";       // No parens here too.

// Is Poymorphism achieved here? I know 'info' here is a property and not function,
// but at the end, what we get is a 'functionality' out of it !!
