//////////////////////////////////////////////////////////////
// STRINGS - STRING METHODS //////////////////////////////////
//////////////////////////////////////////////////////////////

const brand = 'Apple';
const model = 'Macbook Air';

console.log(brand[0]);              //  A
console.log( 'Apple'[0] );          //  A
console.log( 'Apple'[3] );          //  l
console.log( 'Apple'.length );      //  5

// indexOf()
// returns index of a string from a string
brand.indexOf('e');                 // 4 (strings are also 0 based, just like arrays)
model.indexOf('Air');               // 8

// lastIndexOf()
// returns last Index Of given string from a string
brand.lastIndexOf('p');             // 2
'Mississippi'.lastIndexOf('s');     // 6

// slice() - works same as for array
// slice(start_index , end_index):  element at 'end_index' is not included in the returned result.
model.slice(1);
model.slice(-1);

// splice() - 
// No, there is no such thing as a String.splice, but you can try this:
myStr = [...model];
myStr.splice(7);                          // Air
myStr.splice(3,7);                        // book
myStr.splice(0 , myStr.lastIndexOf(' ')); // Mac
myStr = myStr.join('');

// IMP: Javascript automatically converts a string primitive into a string Object and operates on it wth different methods.
console.log( typeof new String("rahul") ); // Object

// On calling slice(), string primitive is converted into object, 
// the method is applied on that object,
// and then the obejct is converted back into string primitive and returned.
console.log( typeof new String("Rahul").slice(-1) ) ; // returns string

