//////////////////////////////////////////////////////////////
// ITERATORS /////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// Iterator is an object that follows a specific "protocol".
// It must have a next() method. Every time you call next(),
// it returns an object with two pieces of information:
//    value: The actual data.
//    done: A boolean telling if you've reached the
//          end of the stack.

// Example - A manual iterator function to see how it works -
function createSimpleIterator(array) {
  let index = 0;

  return {
    next: function() {
      if (index < array.length) {
        return { value: array[index++], done: false };
      } else {
        return { value: undefined, done: true };
      }
    }
  };
}

const myStack = ['Value 1', 'Value 2'];
const bookIterator = createSimpleIterator(myStack);

console.log(bookIterator.next());
// { value: 'Value 1', done: false }
console.log(bookIterator.next());
// { value: 'Value 2', done: false }
console.log(bookIterator.next());
// { value: undefined, done: true }


// Why do we use them?
// "Why not just use a for loop?" While for-loops are great,
// iterators provide some unique "superpowers":

// Memory Efficiency:
//  Imagine working with a large data-set of 1-million-items.
//  You don't need to load an entire 1-million-item list
//  into memory(as it would happen in the case of a loop).
//  You can generate or fetch items one by one as needed
//  (this is called "Lazy Evaluation").

// Custom Logic:
//  You can create an iterator that never ends
//  (like a "Clock" iterator) or one that skips
//  every second item.

// Universal Interface:
//  Iterators are the engine behind the for...of loop and
//  the Spread Operator (...). When you write
//  for (let item of array){ ... }
//  JavaScript is actually using an iterator under the hood.
//  Objects like Arrays, Strings, Maps, and Sets are
//  called Iterables for the very same reason.
//  This just means they have a hidden method that
//  automatically creates an iterator for them whenever
//  you use a loop.

// The simplest way to create iterators are using
// the Generator functions.
