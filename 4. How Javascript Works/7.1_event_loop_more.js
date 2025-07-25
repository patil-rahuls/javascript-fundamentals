// Excercises
// Guess the output of the folliwng -

// 1.
process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside next tick")
  );
});
process.nextTick(() => console.log("this is process.nextTick 3"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("this is Promise.resolve 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside Promise then block")
  );
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
// Output
// this is process.nextTick 1
// this is process.nextTick 2
// this is process.nextTick 3
// this is the inner next tick inside next tick
// this is Promise.resolve 1
// this is Promise.resolve 2
// this is Promise.resolve 3
// this is the inner next tick inside Promise then block



// 2. 
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
  console.log("this is setTimeout 2");
  process.nextTick(() =>
    console.log("this is inner nextTick inside setTimeout")
  );
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);
process.nextTick(() => console.log("this is process.nextTick 1"));
process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside next tick")
  );
});
process.nextTick(() => console.log("this is process.nextTick 3"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
Promise.resolve().then(() => {
  console.log("this is Promise.resolve 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside Promise then block")
  );
});
Promise.resolve().then(() => console.log("this is Promise.resolve 3"));
// Output
// this is process.nextTick 1
// this is process.nextTick 2
// this is process.nextTick 3
// this is the inner next tick inside next tick
// this is Promise.resolve 1
// this is Promise.resolve 2
// this is Promise.resolve 3
// this is the inner next tick inside Promise then block
// this is setTimeout 1
// this is setTimeout 2
// this is inner nextTick inside setTimeout
// this is setTimeout 3



// 3.
const fs = require("fs");
setTimeout(() => console.log("this is setTimeout 1"), 0);
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});
// Because of I/O Polling and setTimeout with 0 seconds, the order of the op is not certain.



// 4.
const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
for (let i = 0; i < 2000000000; i++) {}
// Output
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setTimeout 1
// this is readFile 1



// 5.
const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));
for (let i = 0; i < 2000000000; i++) {}
// Output
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setTimeout 1
// this is readFile 1
// this is setImmediate 1



// 6.
const fs = require("fs");
fs.readFile(__filename, () => {
  console.log("this is readFile 1");
  setImmediate(() => console.log("this is setImmediate 1"));
	process.nextTick(() =>
	  console.log("this is inner process.nextTick inside readFile")
	);
	Promise.resolve().then(() =>
	  console.log("this is inner Promise.resolve inside readFile")
	);
});
process.nextTick(() => console.log("this is process.nextTick 1"));
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
for (let i = 0; i < 2000000000; i++) {}
// Output
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setTimeout 1
// this is readFile 1
// this is inner process.nextTick inside readFile
// this is inner Promise.resolve inside readFile
// this is setImmediate 1




// 7.
setImmediate(() => console.log("this is setImmediate 1"));
setImmediate(() => {
  console.log("this is setImmediate 2");
  process.nextTick(() => console.log("this is process.nextTick 1"));
  Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
});
setImmediate(() => console.log("this is setImmediate 3"));
// Output-
// this is setImmediate 1
// this is setImmediate 2
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setImmediate 3



// 8. 
const fs = require("fs");   
const readableStream = fs.createReadStream(__filename);
readableStream.close();
readableStream.on("close", () => {
  console.log("this is from readableStream close event callback");
});
setImmediate(() => console.log("this is setImmediate 1"));
setTimeout(() => console.log("this is setTimeout 1"), 0);
Promise.resolve().then(() => console.log("this is Promise.resolve 1"));
process.nextTick(() => console.log("this is process.nextTick 1"));
// Output
// this is process.nextTick 1
// this is Promise.resolve 1
// this is setTimeout 1
// this is setImmediate 1
// this is from readableStream close event callback

// 9.
console.log('Start'); 
process.nextTick(() => {
    console.log('Next Tick 1');
    process.nextTick(() => {
        console.log('Next Tick 2');
        process.nextTick(() => {
            console.log('Next Tick 3');
        });
    });
});
setImmediate(() => {
    console.log('Set Immediate 1');
    setImmediate(() => {
        console.log('Set Immediate 2');
    });
    process.nextTick(() => {
        console.log('Next Tick inside Set Immediate');
    });
});
Promise.resolve().then(() => {
    console.log('Promise 1');
    process.nextTick(() => {
        console.log('Next Tick inside Promise');
    });
});
setTimeout(() => {
    console.log('Timeout 1');
    process.nextTick(() => {
        console.log('Next Tick inside Timeout');
    });
}, 0);
new Promise((resolve) => {
    console.log('Promise 2 executor'); 
    resolve(); 
}).then(() => { 
    console.log('Promise 2 then'); 
});
console.log('End');
// Output-
// Start
// Promise 2 executor
// End
// Next Tick 1
// Next Tick 2
// Next Tick 3
// Promise 1
// Promise 2 then
// Next Tick inside Promise
// Timeout 1
// Next Tick inside Timeout
// Set Immediate 1
// Next Tick inside Set Immediate
// Set Immediate 2
