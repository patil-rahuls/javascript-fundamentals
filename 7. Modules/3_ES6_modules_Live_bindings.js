//////////////////////////////////////////////////////////////
// IMP: Imports are live connection to exports      //////////
//////////////////////////////////////////////////////////////

// IMP: In ES6 Modules (import), you get a live connection
// (also called a "live binding"). If the original file updates
// the value, your imported variable updates automatically.

// IMP: The live-connection is ONE-WAY.
// The Provider (the file that exports) can change the value.
// The Consumer (the file that imports) cannot change it.

// Example:
//////////////////////////////////////////////////////////////
// Exporting Module
// mathUtils.js (The Provider)
export let count = 0;

export function increment() {
  count++;
}
//////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////
// Importing Module
// app.js (The Consumer)
import { count, increment } from './counter.js';

console.log(count); // 0
increment();        // We call the function from the other file
console.log(count); // 1 (It updated!)
increment();
console.log(count); // 2 (It updated again!)
//////////////////////////////////////////////////////////////

// IMP Note: The imported values are read-only views of the
// features that were exported. Similar to *const* variables,
// you cannot re-assign the variable that was imported.
// But you can still modify properties of objects.
// The value can only be re-assigned by the module exporting it.

// In the above example, if you try to do count = 10 inside
// app.js, JavaScript will throw a
// TypeError: Assignment to constant variable.
// You can only change it by calling a function (like increment)
// that lives inside the original module.

// Damn! What a feature!
