/*
	CURRYING
	- It's the process of converting functions of N arguments into N functions of 1 argument.
	- Converts functions into factory of functions.
	- You have to keep these two questions in mind to decide if you need to use currying or not:
		- Do you need to compose re-usable partial applications?
		- Do you need to ensure your functions will only have a single argument?
*/
// Without currying:
function isDivisible(num, test) {
	return test % num === 0;
}
// Curried:
function isDivisibleCurried(num) {
	return(test) => {
		return test % num === 0;
	}
}

const isDivisibleBy3 = isDivisibleCurried(3);
isDivisibleBy3(9);  // => true
isDivisibleBy3(10); // => false

const isDivisibleBy5 = isDivisibleCurried(5);
isDivisibleBy5(9);  // => false
isDivisibleBy5(10); // => true