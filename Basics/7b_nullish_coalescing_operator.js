//////////////////////////////////////////////////////////////
// NULLISH COALESCING OPERATOR ?? ////////////////////////////
//////////////////////////////////////////////////////////////

// It works same as || except that it does not consider 0, NaN and '' as falsy values.
// Nullish : null and undefined. (NOT 0, NaN and ''). Only null and undefined will be considered falsy.

const usersCount = 0;
const maxUsers = usersCount || 10;
console.log(maxUsers);
// 10

// But what if we want to consider 0 as a valid value for 'maxUsers'?
// Solution : use nullish/coalesce operator.
const maxUsers = usersCount ?? 10;
console.log(maxUsers);
// 0

// NULLISH COALESCING OPERATOR ?? is useful when you are considering 0 or '' as truthy value.

// Using ?? with NaN is not worth to use, because it will be returning NaN. Always use || to handle NaN
const minUsers = NaN;
const totalUsers = minUsers ?? 23;
console.log(totalUsers);
// NaN

const totalUsers_ = minUsers || 23;
console.log(totalUsers_);
// 23