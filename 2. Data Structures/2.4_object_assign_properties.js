//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - ASSIGN PROPERTIES /////////////
//////////////////////////////////////////////////////////////

// Consider this object as an example.
const myObj = {
   firstName : 'Rahul',
   lastName : 'Patil',
   age : 2049-2021,
};

// Assigning values using DOT notation.
myObj.habbit = 'eating';

// Assigning values using bracket notation.
myObj['veg'] = true;

console.log(myObj);
/* Object {
    firstName : 'Rahul',
    lastName : 'Patil',
    age : 2049-2021,
    frnds: myArr,
    habbit:'eating',
    veg:true,
}*/

// When Object property is a number
myObj.9820694183  = 'mobile';  // this fails.
myObj[9820694183] = 'mobile';  // this works.

// Dynamic property name should always be provided inside []
const prop = 'name';
const obj = {};
obj.prop = 'Rahul';
// obj -  { prop: 'Rahul' }
obj[prop] = 'Rahul';
// obj - { name: 'Rahul' }

// When using const, you cannot re-declare objects
// which are already declared with const.
const myObj = {
    1:'yes',
    2:'No',
    3:'may be'
};

// Below will give an Error "Assignment to constant variable."
myObj = {
    1:'yes',
    2:'No',
    3:'may be',
    4:'cancel'
};
