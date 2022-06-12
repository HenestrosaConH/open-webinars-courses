/* 
	- The typing is determined at runtime, not at compiling.
	- It's also weak because variables are declared without specifying its data type.
	- A string can be converted to a number, so we have to be careful of which values will store a variable.
	- In JS, a variable is casted through explicit coercion and implicit coercion, which is only possible in languages of weak typing.
		- String coercion: 
			EXPLICIT
			- String(123) // '123'
			- let num = 123; num.toString(); // '123'
			IMPLICIT
			- 123 + '' // '123'
		- Boolean coercion:
			EXPLICIT (ONLY these values return false)
			- Boolean('') // false
			- Boolean(0) // false
			- Boolean(-0) // false
			- Boolean(NaN) // false
			- Boolean(null) // false
			- Boolean(undefined) // false
			- Boolean(false) // false
			IMPLICIT
			if (2) { … } // true
		- Number coercion:
			EXPLICIT
			- Number(null) // 0
			- Number(undefined) // NaN
			- Number(true) // 1
			- Number(false) // 0
			- Number(" 10 ") // 10
			- Number("28s") // NaN
			IMPLICIT
			- +'123' // 123

*/
console.log(!+[] + [] + ![]); // => 'truefalse'
console.log(1 === true); // => false
console.log(1 == true); // => true
console.log(0 == []); // => true
console.log(0 == ''); // => true
