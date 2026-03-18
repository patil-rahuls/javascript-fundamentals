//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 3. Hoisting
// Refers to the behavior of variable and function declarations
// being moved to the top of their scope.

// *var* variables are always hoised to the top of their
// respective scope with the value 'undefined' before
// the code is run.
// They are accessible in their enclosing function scope even
// before they are declared.

//  Example #1: *var* variables are hoisted.
function foo() {
  console.log(x); // undefined
  var x = "Rahul";
  console.log(x); // "Rahul"
}
foo();

// *let* & *const* variables are also hoisted but they are said
// to be in ‘Temporal Dead Zone’ from the start of the block
// until the initialization is processed.


//  Example #2: *let* variables are not hoisted.
function checkHoisting() {
  console.log(x);
  // Uncaught ReferenceError: Cannot access 'x' before initialization
  let x = "Rahul";
  console.log(x);
  console.log(y);
  // Uncaught ReferenceError: 'y' is not defined.
}
checkHoisting();

// WHY TDZ exist ? (Answer : to identify the type of issue/bug)
// Observe the error message in the Example #2:

// "Cannot access 'x' before initialization"

// It is because the code is certain that variable 'x' is
// initialized later in the code.
// Hence it is kept in TDZ. Thus we can identify the issue from
// error message created by TDZ and it makes it easier to avoid
// errors/bugs which are hard to find.

// In case of *var*, we get:

//  'y' is not defined

// which seems to be identical error in most of other cases,
// and it becomes difficult to find the actual bug.

// Also, another reason why TDZ exists, is to make *const*
// variables work as intended. i.e. to throw error if *const*
// variables are not initialized while declaring.

// *const* variables are not hoisted.



// Why *var* varibles can be more prone to errors.
// All the following examples work without giving any error,
// but they look bad and erroneous.

//  Example #3:
var name = "Rahul";
var name = "Raj";  // This works without giving any error.
// *var* variables are initialized with the value of
// 'undefined' and moved to the top of the scope(hoisting).
// Functionally, the above code executes like:
var name = undefined;
name = "Rahul";
name = "Raj";


//  Example #4
b = 25;
var b;
console.log(b);           // 25
// Functionally, the above code executes like:
var b = undefined;
b = 25;
console.log(b);           // 25


//  Example #5
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2
// Functionally, the above code executes like:
var a = undefined;
a = 1;
a = 2;
console.log(a); // 2
var a;
// This does not change the value of 'a'
// because it is already initialized.
console.log(a); // 2


//  Example #6
////////////////////////////////////////////////////////////////
// IMP - Fn. Declarations are hoisted before *var* variables ///
////////////////////////////////////////////////////////////////
var a = 1;
function a() {}
console.log(a); // 1
// function declarations are hoisted before any
// *var* initializer gets evaluated.
// So, the initializer(*var* variable) comes later
// and overrides the value.
// The above code functionally looks like below -
function a() {} // fn. declarations hoisted.
var a = 1;      // then a is assigned a primitive value.
console.log(a); // 1


//  Example #7 Another Interesting case.
try {
  f = 100;
  throw 1;
} catch (e) {
  var f = 2;
}
console.log(f); // 100
// The *var* variable 'f' is hoisted to outside the
// catch block with value 'undefined',
// but any value assigned within the catch block is
// not visible outside.  Hence it returns the last assigned
// value which is 100.
// WOW !
