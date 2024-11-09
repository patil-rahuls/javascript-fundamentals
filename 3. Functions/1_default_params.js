//////////////////////////////////////////////////////////////
// FUNCTION DEFAULT PARAMETERS ///////////////////////////////
//////////////////////////////////////////////////////////////

const defaultGrade = 'NA';
const myFunc = function(
   name, 
   id = 0,                          // parameter's default value
   grades = 'Grade ' + defaultGrade // We can have an expression to compute default value
   ){
   console.log(name, id, grades);
}

myFunc('rahul', 12);
// rahul 12 Grade NA

myFunc('hitesh');
// hitesh 0 Grade NA

myFunc('aajesh', undefined , A++);
// aajesh 0 Grade A++

// setting default param value as 'undefined' is the same as not setting the value.
// This means that parameters(without a default value) in a function are set to 'undefined' initialy.
