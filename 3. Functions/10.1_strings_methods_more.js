//////////////////////////////////////////////////////////////
// STRIGS - MORE STRING METHODS //////////////////////////////
//////////////////////////////////////////////////////////////

// More Strings methods:
model.toLowerCase();
model.toUpperCase();

const name = "rAHUL";
const newName = name[0].toUpperCase() + name.slice(1);
// "RAHUL"


// trim(): trims empty spaces at the start and ends of a string:
const newStr = myStr.trim();

// replace():
newStr = myStr.replace("to_b_replaced", "replaces_with_this");

// replaceAll():
newStr = myStr.replaceAll(" ", "_"); // replaces all occurrences.

// Advantage of using string methods is that, we can chain functions like this.
newStr = myStr.replace(" ", "_").replace("$", "Rs.");

// Alternate to replaceAll using regex.
newStr = myStr.replaceAll(/ /g, "_");
// g stands for global. Means apply to the entire string.


// includes(): Checks if a string contains a substring.
// returns a BOOLEAN
return myStr.includes("search_str");


// startsWith(): Checks if a string starts with given substring
return myStr.startsWith("R");

// endsWith(): Checks if a string end with given substring
return myStr.endsWith("R");


// split(): explodes a string into an array (same as explode in php):
// param - delimeter
const str = "Ubuntu's UI is ACTUALLY slow, Admit it!";
const resultArray = str.split(' ');

// Remember to use destructuring wherever we get arrays
const [firstName, lastName] = 'Rahul Patil'.split(" ");


// join(): implodes an array into a string. (same as implode in php)
const newName = ['Mr.' , 'Rahul' , 'Patil'.toUpperCase()].join();
// Mr. Rahul PATIL
const newName = ['Mr.' , 'Rahul' , 'Patil'.toUpperCase()].join( '---' );
// Mr.---Rahul---PATIL


// padStart(): padds a string with given string in the benninging(LOL)
// Syntax - padStart(fixedLength, char)
//          padEnd(fixedLength, char)
// Padding changes the length of the string by adding extra string specified by the user at the end or starting.
const lol = "Barney Stinson";
newStr = lol.padStart(15, '+');
console.log(newStr);				// "+Barney Stinson" (Total length become 15)

newStr = lol.padStart(25, '+');
console.log(newStr);				// "+++++++++++Barney Stinson"  (Total length become 25)


// padEnd(): padds a string with given string at the end.
newStr = go.padEnd(25, '-');

// Real life example:
// debit/credit card number on web pages. Show only last four digits and mask all starting digits by '*'
const maskCreditCard = function(number){
   let given = '' + number;
   // parameter converted to a string.
   // Now we can pass a number as well as a string to this function.

   // Get the last 4 digits and length.
   const last = given.slice(-4); 			// start from last 4th char.
   const len = given.length;
   const newVal = last.padStart(len, '*');
   console.log( newVal );
}

maskCreditCard(5674657210978324);   		// will accept number type.
maskCreditCard('1200987564738523'); 		// will accept string too.

// repeat(): Repeats strings given number of times
// Use-case: Useful to show icons like ratings, stars etc.)
name = "Rahul";
name.repeat(4); // "RahulRahulRahulRahul"

let rating = 4;
console.log( `You have got ${rating} rating \n ${'🌟'.repeat(rating)}` );
