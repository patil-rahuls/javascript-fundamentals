//////////////////////////////////////////////////////////////
// LET, CONST, VAR COMPARISION ///////////////////////////////
//////////////////////////////////////////////////////////////

// 3. Hoisting
// Refers to the behavior of variable and function declarations being moved to the top of their scope.
// A *var* variable or a function declaration can be used before it is declared in the code.

// Variables declared using *var* are always hoised to the top of their respective scope with
// the value 'undefined' before the code is run.
// They are accessible in their enclosing function scope even before they are declared.

//  Example #1:
function foo() {
  console.log(x); // undefined
  var x = "Rahul";
  console.log(x); // "Rahul"
}
foo();

// *let* variables are also hoisted but they are said to be in ‘Temporal Dead Zone’ 
// from the start of the block until the initialization is processed.

//  Example #2:
function checkHoisting() {
  console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
  let x = "Rahul";
  console.log(x);
  console.log(y); // Uncaught ReferenceError: 'y' is not defined.
}
checkHoisting();

// WHY TDZ exist ? (Answer : to identify the type of issue/bug)
// Observe the error message in the Example #2: "Cannot access 'x' before initialization"
// It is because the code is certain that 'name' is initialized later in the code.
// Hence it is kept in TDZ. Thus we can identify the issue from error message created by TDZ and
// it makes it easier to avoid errors/bugs which are hard to find.

// In case of *var*, we get `<VARIABLE> is not defined`, which seems to be identical error in most of other cases,
// and it becomes difficult to find the actual bug.

// Also, another reason why TDZ exists, is to make *const* variables work as intended. i.e.
// to throw error if *const* variable is not initialized while defining.

// This is a useful behaviour, since *var* can be more prone to errors.

// *const* variables are not hoisted.


//  Example #3
var name = "Rahul";
var name = "Raj";        // This works without giving any error.
// The example above looks bad and erroneous, but works. That shouldn't happen.
// *var* variables are initialized with the value of 'undefined' and moved to the top of the scope(hoisting).
// So functionally, the above code looks like - 
var name = undefined;
name = "Rahul";
name = "Raj";


//  Example #4
b = 25;
var b;
console.log(b);           // 25
// The above code is functionally like below -
var b = undefined;
b = 25;
console.log(b);           // 25


//  Example #5
var a = 1;
var a = 2;
console.log(a); // 2
var a;
console.log(a); // 2


//  Example #6 IMP
var a = 1;
function a() {}
console.log(a); // 1
// function declarations are hoisted before any *var* initializer gets evaluated.
// So, the initializer(*var* variable) comes later and overrides the value.


//  Example #7
try {
  throw 1;
} catch (e) {
  var e = 2;
}
console.log(e); // undefined
// The *var* variable 'e' is hoisted to outside the catch block with value 'undefined', 
// but any value assigned within the catch block is not visible outside.
// Hence it returns undefined.
