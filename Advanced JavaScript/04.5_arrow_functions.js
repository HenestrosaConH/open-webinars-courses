/*
	- A function declaration (function doSomething() {}) is hoisted to the top of the scope.
	- A function expression ([const | let | var] = function () {} (or () =>) is the creation of 
	of an anonymous function and the creation of a variable, and then the assignment of that anonymous function to that variable.
*/

/*
	ONE PARAMETER
*/

// Traditional Anonymous Function:
const anonymous = function (a) {
	return a + 100;
};

// Arrow Function Break Down:
const arrow;
// 1. Remove the word "function" and place arrow between the argument and opening body bracket.
arrow = (a) => {
	return a + 100;
}

// 2. Remove the body braces and word "return" -- the return is implied.
arrow = (a) => a + 100;

// 3. Remove the argument parentheses.
arrow = a => a + 100;

// ----------------------------------
console.log(arrow(2));
console.log(anonymous(3));

/*
	MULTIPLE ARGUMENTS
*/
// Traditional Anonymous Function:
anonymous = function (a, b) {
	return a + b + 100;
};

// Arrow Function:
arrow = (a, b) => a + b + 100;

// ----------------------------------
console.log(arrow(2, 3));
console.log(anonymous(2, 3));

/*
	NO ARGUMENTS
*/ 
let a = 4;
let b = 2;

// Traditional Anonymous Function (no arguments):
anonymous = function () {
	return a + b + 100;
}

// Arrow Function (no arguments):
arrow = () => a + b + 100;

// ----------------------------------
console.log(arrow());
console.log(anonymous());