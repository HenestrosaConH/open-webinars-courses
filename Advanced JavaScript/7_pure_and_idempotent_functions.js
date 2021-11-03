/*
    PURE FUNCTIONS (analogue of a mathematical function)
    - A pure function only depends on the input parameters
    - They can be removed from the code without collateral impact on the execution of the code
*/
const doubleNumber = x => x * 2;
const halfNumber = x => x / 2;
const squareNumber = x => x ** 2;
console.log(doubleNumber(halfNumber(4)));
console.log(halfNumber(doubleNumber(4)));
console.log(doubleNumber(squareNumber(4)));
console.log(squareNumber(doubleNumber(4)));

/*
    IDEMPOTENT FUNCTIONS
    - Any function that can be executed several times without changing the final result beyond its first iteration
*/
const evenConverter = (x) => (x % 2 !== 0) ? x + 1 : x;
console.log(evenConverter(5));
console.log(evenConverter(evenConverter(5)));