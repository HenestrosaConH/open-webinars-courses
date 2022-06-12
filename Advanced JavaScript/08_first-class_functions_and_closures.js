/*
	FIRST-CLASS FUNCTIONS
	- A programming language has first-class functions only if they can be treated as a variable.
	- They can be passed as an argument, returned by another function or be assigned to another variable.
	- They can be anonymous or named.
*/
// Anonymous stored in a variable:
const double = function(x) {
	return x * 2;
}

// Named:
function applyFunction(func, x) {
	return func(x);
}

console.log(applyFunction(double, 5)); // => 10

// We can create a function that returns a function:
const createFunction = function(x) {
	return () => { return x * 2 }
}
const returnFunction = createFunction(4);

console.log(returnFunction());      // => 8
console.log(createFunction(4)());   // => 8

/*
	CLOSURES
	- A closure is a function that has access to the parent scope, even after the parent function has been executed.
	- It allows us to create private properties in JS.
	- It's the closest approach to object-oriented programming in JS.
*/
const withoutClosure = () => {
	let counter = 0;
	return ++counter;
}
console.log(withoutClosure()); // => 1
console.log(withoutClosure()); // => 1
console.log(withoutClosure()); // => 1

const withClosure = () => {
	let counter = 0;
	// NOTICE THE () AFTER RETURN. That's the closure. It accesses and stores the internal scope of the returned function.
	return () => ++counter;
}
const increaseCounter = withClosure();
const increaseCounter2 = withClosure();
console.log(increaseCounter());     // => 1
console.log(increaseCounter());     // => 2
console.log(increaseCounter());     // => 3
console.log(increaseCounter2());    // => 1

// Variable that emulates a class thanks to the closure:
const closure = () => {
	let name = "There is no name";
	return {
		setName: (value) => { name = value },
		getName: () => name
	};
}
const person = closure();
console.log(person.name);               // => undefined
console.log(person.getName());          // => There is no name
console.log(person.setName("Antonio")); 
console.log(person.name);               // => undefined
console.log(person.getName());          // => Antonio



