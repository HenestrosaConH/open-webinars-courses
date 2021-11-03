/*
    ASYNC
    - It's a function that always returns a promise
    - They're declared as "async function"
    - Asynchronicity in JS is handled by the cycle of events. It processes the callbacks when the call stack is empty
*/

async function async1() {
    return Promise.resolve("It works!");
}

async function async2() {
    return Promise.resolve("It works too!");
}

let async3 = async () => "Indeed it works!";

async1().then(resp => console.log(resp));
async2().then(resp => console.log(resp));
async3().then(resp => console.log(resp));

/*
    AWAIT
    - Only usable with functions that return a promise 
    - It freezes the execution of code until the promise is resolved
    - It kind of turns an async process into a sync process
*/
async function asyncAwait() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Done!"), 1000)
    });
    let result = await promise; // Execution will stop here
    console.log(result);
}

asyncAwait();

// An async code turned into a sync function
// Async
promise.then(res => console.log(res * 2))
    .then(res => console.log(res * 4))
    .catch(error => console.error(error));
// Sync
try {
    let res = noPromise() * 2;
    res = res * 4;
} catch (error) {
    console.error(error);
}