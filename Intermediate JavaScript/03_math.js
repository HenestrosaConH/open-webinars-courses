var pi = Math.PI;

// min() returns the min value
console.log(Math.min(1, 2, 3, 4345, 0, -10));
// max() returns the max value
console.log(Math.min(1, 2, 3, 4345, 0, -10));
// round(). 0.5 rounds to 1. Rounds to the nearest integer
console.log("round(): " + Math.round(4.4));
console.log("round() negative: " + Math.round(-4.4));
// floor() rounds down
console.log("floor(): " + Math.floor(4.4));
console.log("floor() negative: " + Math.floor(-4.4));
// ceil() rounds to the top
console.log("ceil(): " + Math.ceil(4.4));
console.log("ceil() negative: " + Math.ceil(-4.4));
// truncate() rounds towards 0
console.log("truncate(): " + Math.trunc(4.4));
console.log("truncate() negative: " + Math.trunc(-4.4));

// random() returns a float between 0 and 1
var random = Math.random(); 

export function getRandom(max) {
    return Math.round(Math.random() * max);
}
console.log("Random: " + getRandom(2));

