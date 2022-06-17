/*
	- map(func) creates a new array from calling a function for every array element.
	- map(func) does not change the original array.
*/
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt); // => [ 2, 3, 4, 5 ]
console.log(numbers); // => [4, 9, 16, 25]

/*
	- filter(func) creates an array filled with all array elements that pass a test (provided by a function).
*/
const ages = [32, 33, 16, 40];

function checkAdult(age) {
	return age >= 18;
}
// If the value is evaluated as true, then it will be added to the filtered array:
ages.filter(checkAdult) // => [32, 33, 40]