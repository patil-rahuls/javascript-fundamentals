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
const shallowCopy = Object.assign({}, myObj);

// 2. Deep Copy
const deepCopy = JSON.parse(JSON.stringify(myObj));
// OR using structuredClone()
const clone = structuredClone(myObj);

// 3. Merge one or more Objects.
let merged = {...obj1, ...obj2};

// Using Object.assign()
const allMerged = Object.assign({}, obj1, obj2, obj3, etc);
// In the above example, the properties of obj1 will be overwritten by properties of obj2,
// and same happens with obj2 and obj3, and so on.
