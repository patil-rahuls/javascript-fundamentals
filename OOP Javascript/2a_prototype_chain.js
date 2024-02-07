//////////////////////////////////////////////////////////////
// PROTOTYPE CHAIN ///////////////////////////////////////////
//////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//  _________________                                          _______________________
// |                 |----------- Student.prototype --------->|                       |
// | Constructor Fn. |                                        | Prototype (of "stu")  |
// |  [ Student() ]  |<---- Student.prototype.constructor ----|  [Student.prototype]  |
// |_________________|                                        |_______________________|
//                                                                        ^
//                                                         Prototypal     |
//                                            ^            Inheritance/   |  .__proto__
//                                            |             Delegation    |
//                            Prototype Chain |              _____________|________________
//                                            |             |                              |
//                                            |             |           Object             |
//                                                          |          ["stu"]             |
//                                                          | name     : "Rahul"           |
//                                                          | rollNo   : 1                 |
//                                                          | __proto__: Student.prototype |
//                                                          |______________________________|
//
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Lets zoom out of this diagram, to view a more detailed explanation of Prototype Chain. [Eagle's View]

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//         _________________            _______________________
//        |                 |          |                       | Object.prototype
//  ----> | Constructor Fn. |--------->|      Prototype        |  > constructor f
//  |     |  [ Object() ]   |          |  [ Object.prototype ] |  > ...                                             ^
//  |     |_________________|          |   __proto__ : null    |  > hasOwnProperty f <----------                    |
//  |                                  |_______________________|                               |                    |
//  |                                             ^                                            |                    |
//  |                                             |  .__proto__                                |                    |
//  |      _________________            __________|____________                                |                    |
//  |     |                 |          |                       |                               |                    |
//  |     | Constructor Fn. |--------->|      Prototype        |  This is an Object itself.    |                PROTOTYPE
//  |     |  [ Student() ]  |          |  [Student.prototype ] |  Remember every object in     |                  CHAIN
//  |     |_________________|          |     __proto__ :       |  JS has a prototype !         |                    |
//  |                                  |   Object.prototype    |                               |                    |
//  |                                  |_______________________|                               |                    |
//  |                                             ^                                            |                    |
//  |                                             |  .__proto__                                |                    |
//  |                                   __________|____________                                |                    |
//  |                                  |                       |                               |                    |
//  -- Built-in Constructor Fn.        |        Object         |                       method hasOwnProperty()      |
//    for objects. This is used        |        [ stu ]        |                     can now be accessed using      |
//    when we write an object literal  |      __proto__ :      |                     "stu" Object, because it       |
//     {...} = new Object(...);        |   Student.prototype   |                       is inherited from the        |
//                                     |_______________________|                      built-in Object.prototype     |
//
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

console.log(stu.hasOwnProperty('name'));
// From the above diagram, the method hasOwnProperty() is called using the "stu" Object.
// So it is checked/looked up for existence in the "stu" Object, where it is not found.
// Then, just like Scope chain, here too, it looks UP for the method definition in "stu"
// object's prototype
//
// "stu" prototype means stu.__proto__ and that is Student.prototype (see the above diagram)
// Again, the method hasOwnProperty() is not found in Student.prototype too, so it is looked
// Up the Student.prototype's prototype i.e. its .__proto__ property, i.e. the built-in Object's prototype property
// Object.property has most of the methods like hasOwnProperty(), as it is built-in.

// Also, note that there is no prototype of Object.prototype (Object.prototype.__proto__ : null).
// So, this becomes the end of our Prototype Chain.
