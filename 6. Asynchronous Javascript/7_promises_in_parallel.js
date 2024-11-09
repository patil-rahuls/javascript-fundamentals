//////////////////////////////////////////////////////////////
// PROMISES IN PARALLEL //////////////////////////////////////
//////////////////////////////////////////////////////////////

// Running promises in parallel means executing multiple asynchronous operations at the same time,
// without waiting for any of them to complete before starting the next one.
// This can greatly improve performance in situations where there are many independent and
// time-consuming tasks to be performed.
// Always use try catch block with async functions.

const myFunc = async function(page1, page2, page3) {
    try{
        const response1 = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page1);
        const response2 = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page2);
        const response3 = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page3);
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();
        console.log([data1, data2, data3]);
    }catch(err){
        console.log(err.message);
    }
};

myFunc("2", "4", '6');
// This will give results as required. However, the latter 'response's will wait for their former 'response's to complete.
// and that is actually looking like synchronous.
// However instead of making them run in sequence, we can make them run parallely.

// Solution:
// Promise.all() its a static method.
// It returns an array promise that runs all the promises passed to it in array.
// If one promise rejects, the whole promise is rejected.

const myFunc2 = async function(page1, page2, page3) {
    try{
        // const response1 = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page1);
        // const response2 = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page2);
        // const response3 = await fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page3);
        const data = await Promise.all([
            fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page1),
            fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page2),
            fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page3)
        ]);

        // const data1 = await response1.json();
        // const data2 = await response2.json();
        // const data3 = await response3.json();

        // Since these are json responses we will need to use json() method which also returns promise.
        // Hence,
        const finalData = await Promise.all([
            data[0].json(),
            data[1].json(),
            data[2].json()
        ]);
        // OR
        const finalData_ = await Promise.all( data.map(d => d.json()) );
        console.log(finalData_);

        /*
        Old way - using then()
            Promise.all([
                fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page1),
                fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page2),
                fetch("https://deelay.me/5000/https://reqres.in/api/users?page="+page3)
            ]).then(results => console.log(results))
            .catch(err => console.log(err.message));
        */
    }catch(err){
        console.log(err.message);
    }
};
