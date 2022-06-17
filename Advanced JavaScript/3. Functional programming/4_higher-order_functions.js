/*
	HIGHER-ORDER FUNCTIONS  
	- Abstraction of common functionalities between functions. Example:
		- Function A > Common functionality > Functionality A > Output
		- Function B > Common functionality > Functionality B > Output
		Applying the HOF function principle, the workflow'd like this:
		- Common functionality > Function A > Functionality A > Output
							   > Function B > Functionality B > Output
*/
const printHelloInLoop = (n) => {
	for (let i = 0; i < n; i++) {
		console.log("Hello world!");
	}
}

const printByeInLoop = (n) => {
	for (let i = 0; i < n; i++) {
		console.log("Bye world!");
	}
}

// Applying HOF principle:
const printHello = () => {
	console.log("Hello world");
}

const printBye = () => {
	console.log("Bye world");
}

const doInLoop = (n, action) => {
	for (let i = 0; i < n; i++) {
		action();
	}
}

doInLoop(2, printHello);
doInLoop(2, printBye);

// Another example. This example uses currying, see 10.5_currying.js for more insight.
const greaterThan = (n) => {
	return (m) => m > n
}

const greaterThan10 = greaterThan(10);
const greaterThan15 = greaterThan(15);

greaterThan10(5);   // => false
greaterThan10(11);  // => true

const increaseCounter = (func) => {
	let counter = 0;
	return (...arguments) => {
		console.log(...arguments)
		counter++;
		console.log(`Ejecución número ${counter}`);
		return func(...arguments);
	}
}

const countedSum = increaseCounter((x, y) => x + y);
const countedSubtraction = increaseCounter((x, y) => x - y);

countedSum(1, 2);
countedSum(4, 5);
countedSubtraction(20, 10);

