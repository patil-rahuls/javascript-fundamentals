//////////////////////////////////////////////////////////////
// NULLISH COALESCING OPERATOR ?? ////////////////////////////
//////////////////////////////////////////////////////////////

// It works same as || except that it does not consider 0, '', Infinity and NaN as falsy values.
// Nullish means only 'null' and 'undefined' will be considered falsy.

//  Example #1
const usersCount = 0;
const maxUsers = usersCount || 10;
console.log(maxUsers);
// 10

// But what if we want to consider 0 as a valid value for 'maxUsers'?
// Solution : use nullish/coalesce operator.
const maxUsersCount = usersCount ?? 10;
console.log(maxUsersCount);
// 0

//  Example #2
// NULLISH COALESCING OPERATOR ?? is useful when you are considering 0 or '' as truthy value.
const isDeleted = '';
const result = isDeleted ?? 1;
console.log(result);
// ''

//  Example #3
// Using ?? with Infinity and NaN is not worth to use, because it will be returning Infinity/NaN.
// Always use || to handle Infinity and NaN.
const minUsers = NaN;
const totalUsers = minUsers ?? 23;
console.log(totalUsers);
// NaN

const users = 1/0;
const totalUsrs = users ?? 0;
console.log(totalUsrs);
// Infinity

const minUsrs = minUsers || 23;
console.log(minUsrs);
// 23
