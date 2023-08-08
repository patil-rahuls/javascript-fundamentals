//////////////////////////////////////////////////////////////
// FOR IN LOOP ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////

// To iterate over an Iterable.
// "for..in" iterate over a list of "keys/index" on the object being iterated.

//  Example #1:
let list = [4, 5, 6];
for (let i in list) {
   console.log(i); // "0", "1", "2",
}

//  Example #2:
var employee = {
   employee_id: "123",
   employee_name: "Rahul",
   employee_address: "India",
   salary: "LOL"
}
for(const i in employee)
   console.log(i);
// employee_id
// employee_name
// employee_address
// salary
