/*
    MODULES
    - They're an abstract interface with explicit exports and imports
    - implementation and interface are separate, there may be multiple implementations and the implementation is hidden
    -They 're executed in strict mode, meaning that changes previously accepted "bad syntax" into real errors
*/
// Non-modular approach
const avgSumNonModular = (a, b, avg) => (a + b) * avg;
const avgSubtractionNonModular = (a, b, avg) => (a - b) * avg;

// This way, our code is being duplicated by the avg parameter for each function call
const avg = 0.5;
console.log(avgSumNonModular(5, 20, avg)); // 12.5
avgSubtractionNonModular(5, 11, avg); // -3

// Modular approach
const myModule = function() {
    // Notice how we encapsulate the avg variable only into the function scope
    var avg = 0.5;
    return {
        avgSum: (a, b) => (a + b) * avg,
        avgSubtraction: (a, b) => (a , b) * avg
    }
}

// Deconstructing assignment syntax
const {
    avgSum,
    avgSubtraction
} = myModule();

console.log(avgSum(5, 20)); // 12.5
// prom = 1; // will throw an exception


// We can create submodules too:
const myModuleWithSubmodules = function() {
    const avg = 0.5;
    return {
        math: {
            avgSum: (a, b) => (a + b) * avg,
            avgSubtraction: (a, b) => (a - b) * avg
        }, 
        date: {
            getDate: () => new Date()
        }
    }
}

const { math, date } = myModuleWithSubmodules();
const hola = math.avgSum(5, 20);
console.log(hola + 1);

// In 12.1 and 12.2 files, we can see how to import/export a module from a file to another

// In HTML: <script type="module" src="[.mjs/.js path]"></script>
// If the module is within the HTML: <script type="module" src="[.mjs/.js path]"></script>