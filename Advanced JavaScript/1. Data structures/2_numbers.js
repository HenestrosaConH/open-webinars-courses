/*
	ALL NUMBERS IN JAVASCRIPT ARE FLOATING POINT NUMBERS.
	Floating point numbers include only limited precision.
	More than 15 positive digits or 6 negative digits will make the floating point number rounded.
*/

console.log(parseInt(0.5));         // => 0
console.log(parseInt(0.05));        // => 0
console.log(parseInt(0.005));       // => 0
console.log(parseInt(0.0005));      // => 0
console.log(parseInt(0.00005));     // => 0
console.log(parseInt(0.000005));    // => 0
console.log(parseInt(0.0000005));   // => 5
// because parseInt(0.0000005); same as
parseInt(5e-7);
// same as
parseInt('5e-7');    // => 5

console.log(parseInt(999999999999999999999));   // => 1
// because parseInt(999999999999999999999); same as
parseInt(1e21);
// same as 
parseInt('1e21');   // => 1

/*
	(Taken from https://stackoverflow.com/a/8907698/15675885)
	The number 9999999999999999 is just above the precision limit of double-precision floating-point. In other words, the 53-bit mantissa is not able to hold 9999999999999999.

	So the result is that it is rounded to the nearest double-precision value - which is 10000000000000000.

	9999999999999999 = 0x2386f26fc0ffff  // 54 significant bits needed
	10000000000000000 = 0x2386f26fc10000  // 38 significant bits needed
*/
console.log(parseInt(99999999999999999999));    // => 100000000000000000000
console.log(parseInt(9999999999999999999));     // => 10000000000000000000
console.log(parseInt(999999999999999999));      // => 1000000000000000000
console.log(parseInt(99999999999999999));       // => 100000000000000000
console.log(parseInt(9999999999999999));        // => 10000000000000000