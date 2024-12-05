//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - CLONES ////////////////////////
//////////////////////////////////////////////////////////////

// Consider this object as an example.
const myObj = {
    firstName : 'Rahul',
    lastName : 'Patil',
    age : 2049-2021,
};


// 1. Shallow Copy - Object.assign
// Syntax - Object.assign(target, ...sources)
const shallowCopy = Object.assign({}, myObj);
// The Object.assign() invokes the getters on the source objects and setters on the target. 
// It assigns properties only, not copying or defining new properties.
// IMP - But be aware this is a shallow copy - 'nested objects' are still copied as reference.
    const x = { name: 'Rahul', dob : { year : 1990 }};
    const copy = Object.assign({}, x);
    // copy - { name: 'Rahul', dob : { year : 1990 }}
    // Now, in the 'copy' object, all outer most properties i.e. 'name' in this case,
    // are an independent copy. And all the properties with nested objects as their values
    // are references.
    x.name = 'patil';
    // x - { name: 'patil', dob : { year : 1990 }}
    // copy - { name: 'Rahul', dob : { year : 1990 }} 
    // i.e. name property remains independent.

    x.dob.year = 1991;
    // x - { name: 'patil', dob : { year : 1991 }}
    // copy - { name: 'Rahul', dob : { year : 1991 }} 
    // i.e. the nested object property gets changed.


// 2. Deep Copy
// using JSON
const deepCopy = JSON.parse(JSON.stringify(myObj));

// Using structuredClone()
const clone = structuredClone(myObj);
// IMP - does not clones methods and DOM nodes inside the source object.

// We can also use some libraries like lodash or underscore.

// 3. Merge one or more Objects.
// Using destructuring assignment
let merged = {...obj1, ...obj2};

// Using Object.assign()
const allMerged = Object.assign({}, obj1, obj2, obj3, etc);
// Properties of 'obj1' will be overwritten by properties of 'obj2'
// and same happens with obj2 and obj3, and so on.
