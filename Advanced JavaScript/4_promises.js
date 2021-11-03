/*
    - They're used for executing async tasks. The workflow goes like this:
        - 1. Blocking action (user event that blocks the main thread)
        - 2. Processing the event 
        - 3. Promise (represents the eventual completion (or failure) of an asynchronous operation and its resulting value)
        - 4. Result (continues the execution without waiting for the resolution of the promise)
    
    - It can be pending, fulfilled or rejected
*/

function checkName(name) {
    return new Promise(function(resolve, reject) {
        if (name === "Pablo") {
            resolve("Your name is Pablo");
        } else {
            reject("You're not Pablo!")
        }
    });
}

checkName("Pablo") 
    .then(response => console.log(response))
    .catch(error => console.log(error));

/*
    Methods:
        - Promise.all(iterable) // receives an iterable object of promises and returns a single promise whose value is an array of all of the input's promises resolved. It will throw an error if any is encountered
        - Promise.race(iterable) // receives an iterable object of promises and returns the first promise resolved, whether it's successful or not
        - Promise.reject(reason) // returns a rejected promise with the reason that we input
        - Promise.resolve(value) // returns a resolved promise with the value that we input
*/