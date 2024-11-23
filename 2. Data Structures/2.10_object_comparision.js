//////////////////////////////////////////////////////////////
// DATA STRUCTURES - OBJECTS - COMPARISION ///////////////////
//////////////////////////////////////////////////////////////

// Consider these objects as an example.
const myObj = {
    firstName : 'Rahul',
    lastName : 'Patil',
    age : 2049-2021,
};

const yourObj = {
    firstName : 'test',
    lastName : 'Test',
    age : 2049-2021,
};

// A handy way to compare two objects in JS would be:
JSON.stringify(a) === JSON.stringify(b); // true
// Works when you have simple JSON-style objects without methods and DOM nodes inside

// We can also use some libraries like lodash or underscore.

// Also, the ORDER of the properties IS IMPORTANT.
// Following objects comparision will return false.
x = {a: 1, b: 2};
y = {b: 2, a: 1};
JSON.stringify(x) === JSON.stringify(y); // false

// Excercise - 
// Create a function to compare two objects.
// The properties in the objects can be in any order.
// e.g. This should return true
x = {name: 'Rahul', age: 29};
y = {age: 29, name: 'Rahul'};

// Function to compare any numbers of obj
function areEqual(...objArr){
    // Create a deep/independent copy of objArr, so that we dont change the passed objArr.
    const ipArr = [...objArr];
    console.log(ipArr);
    
    // Get first obj from the objArr
    const firstObj = ipArr.shift();
    // Now ipArr will be left with the remaining obj except first.
    console.log(ipArr);
    
    const lengthComparisionResult = ipArr.reduce((acc, obj) => {
        const currObjLen = Object.keys(obj).length;
        if(currObjLen === Number(acc)){
            return currObjLen; // Return actual length of keys if all obj sizes are same
        } else {
            return false; // Return boolean type for incorrect obj sizes
        }
    }, Object.keys(ipArr[0]).length);
    
    // This is called a gaurd clause.
    if(!lengthComparisionResult){
        return false;
    }

    // Now that we have same length of keys in all obj,
    // check if they all have the same properties.
    return ipArr.every(obj => {
        // Compare each obj of ipArr with firstObj.
        let keysComparisionResult = false;
        for(const [prop,val] of Object.entries(obj)){
            if(firstObj?.[prop] === val){
                keysComparisionResult = true;
            }
            keysComparisionResult = false;
        }
        return keysComparisionResult;
    });
}