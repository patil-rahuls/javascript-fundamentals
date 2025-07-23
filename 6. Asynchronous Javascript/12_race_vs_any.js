// Promise.race is settled as soon as any of the promises you feed it "settle", 
// whether they are "fulfilled" or "rejected".

// Promise.any is settled as soon as any of the promises you feed it is fulfilled 
// or they are all rejected, in which case it's rejected with an AggregateError.

// Promise.race's promise is rejected when one of the promises you give it is rejected first; 
// Promise.any's promise isn't, because another promise may be fulfilled instead.

// Promise.race's rejection reason will be the rejection reason from the first promise that was rejected.
// Promise.any's promise's rejection reason will be an AggregateError, 