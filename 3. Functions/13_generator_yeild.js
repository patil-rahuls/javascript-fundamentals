//////////////////////////////////////////////////////////////
// GENERATOR FUNCTIONS [ES6] /////////////////////////////////
//////////////////////////////////////////////////////////////

// A generator function is a special type of function in JavaScript 
// that allows pausing and resuming its execution during runtime. 

// Unlike regular functions, which run to completion, generator functions 
// can be paused and resumed multiple times, making them particularly useful 
// for dealing with asynchronous operations, handling large datasets, and writing custom iterators.

// Generator functions are defined using the function* syntax, and 
// they use the yield keyword to pause the function's execution and 
// produce a value. 

// When a generator function is called, it returns an iterator object, 
// which can be used to control the function's execution.

function* generatorFunction() {
  // Generator function body
  yield value1;
  yield value2;
  // ...
}

// RETURNS an *Iterator* Object
// The *iterator* object has two methods - next() and return()

// *next()*
// The next() method is used to resume the execution of a generator function
// from where it was paused. It returns an object with two properties: value and done.

// The *value* property contains the value produced by the yield statement.
// The *done* property is a boolean indicating whether the generator has completed
// (true) or is still running (false).

//  Example#1
function* simpleGenerator() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator1 = simpleGenerator();
console.log(iterator1.next()); // Output: { value: 1, done: false }
console.log(iterator1.next()); // Output: { value: 2, done: false }
console.log(iterator1.next()); // Output: { value: 3, done: false }
console.log(iterator1.next()); // Output: { value: undefined, done: true }


// *return()*
// The return() method allows us to force a generator to complete before it 
// reaches the end. It can take an optional argument that will be returned 
// as the final value of the generator.

//  Example#2
function* generatorWithReturn() {
  yield 1;
  yield 2;
  yield 3;
}
const iterator2 = generatorWithReturn();
console.log(iterator2.next());              // Output: { value: 1, done: false }
console.log(iterator2.return("Finished!")); // Output: { value: "Finished!", done: true }
console.log(iterator2.next());              // Output: { value: undefined, done: true }
console.log(iterator2.next());              // Output: { value: undefined, done: true }



// Generator function for asynchronous tasks
function fetchData(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Data fetched from ${url}`);
    }, 2000);
  });
}

function* fetchDataGenerator() {
  const data1 = yield fetchData('https://api.example.com/data1');
  console.log(data1);
  const data2 = yield fetchData('https://api.example.com/data2');
  console.log(data2);
  const data3 = yield fetchData('https://api.example.com/data3');
  console.log(data3);
}

const iterator3 = fetchDataGenerator();
const promise = iterator3.next().value;
promise.then((data) => {
  iterator3.next(data1).value.then((data) => {
    iterator3.next(data2).value.then((data) => {
      iterator3.next(data3);
    });
  });
});

// 
function* counter() {
  let count = 1;
  while (true) {
    yield count++;
  }
}

const iterator = counter();
console.log(iterator.next()); // Output: { value: 1, done: false }
console.log(iterator.next()); // Output: { value: 2, done: false }
console.log(iterator.next()); // Output: { value: 3, done: false }
