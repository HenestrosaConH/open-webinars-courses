/*
    PRINCIPLES OF FUNCTIONAL METHODOLOGY
    - The main goal is to avoid mutability of variables
    - Use const over let or var in order to avoid immutability
    - Use recursion instead of iteration
    - Object mutation or methods that has secondary impacts (i.e. modifying a global var) are not a good practice
*/
// A mutation is a change in the structure of an object instead of a replacement of the instance
let foo1 = 10;
foo1 = 20; // This is not a mutation because each new value is an instance

let foo2 = [20, 30, 50];
foo2.pop();
// This is a mutation because, without assigning a new value, the structure of the object has been modified

// We would have to do it this way in order to make it right:
let array1 = [20, 30, 50];
let array2 = [...array1];
array2.pop();
// array1 has [20, 30, 50]
// array2 has [20, 30]


// To avoid iteration, we need to use recursion
// NON-RECURSIVE
function factorial(n) {
    var res = 1;
    for (let i = n; i >= 1; i--) {
        res *= i;
    }
    return res;
}
// RECURSIVE
function factorial(n) {
    console.log(`N: ${n}`);
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
console.log(factorial(3));