/*
    OBJECT ARGUMENTS
    - ONLY IN NON-ARROW FUNCTIONS!!!
    - Contains an array of the input parameters of a function
*/

function printParameters(x, y, word) {
    console.log(arguments); // Returns an array-like object  
    console.log(...arguments); // Deconstructed array
    console.log(`Length: ${arguments.length}`); // Deconstructed array
    console.log(arguments[0]); // We can only pick individuals values by their index
}
printParameters(2, 3, "word");

/*
    - The spread operator(...) allows us to deconstruct the array. Useful for duplicating the values of an array too
*/
// Spreading allows us to copy arrays
let array1 = [1, 4, 6];
let array2 = [...array1];
console.log(array1); // [1, 4, 6]
console.log(array2); // [1, 4, 6]

// It also copies objects
let obj1 = { a: 5, b: 29, c: 48};
let obj2 = {...obj1};
delete obj2.a;
console.log(obj1); // { a: 5, b: 29, c: 48 }
console.log(obj2); // { b: 29, c: 48 }

// We can pass arrays as parameters 
function sum(x, y, z) {
    return x + y + z;
}

const input = [2, 3, 5];
console.log(sum(...input)); // 10