// Falsy assignments
// A falsy value is something that evaluates to FALSE. See the Boolean coercion of 01_dynamic_typing.js

/*
	Logical OR, ||
	If the first value is truthy, it gets returned. Otherwise, the second value gets returned.
*/

let x = 1;
let y = 0; // falsy
let res = x || y; 
console.log(res); // => 1

x = null; // falsy
y = 0; // falsy
res = x || y;
// First value is falsy, so it returns the second value whether it's truthy or not.
console.log(res); // => 0

/*
	Logical AND, &&
	The opposite of ||. If the first value is truthy, it returns the second value.
*/

x = 2;
y = 1;
res = (x || y);
console.log(res); // => 2
res = (x && y);
console.log(res); // => 1

x = null; // falsy
y = undefined; // falsy
res = (x && y);
console.log(res); // => null
res = (y && x);
console.log(res); // => null
