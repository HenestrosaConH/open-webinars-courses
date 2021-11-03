// Creating an array with a defined size
var person = new Array(3);
// These two ways are basically the same
var colors = new Array("red", "blue", "green");
var person = ['John', 30, true];

// To add values to an already defined array
colors.push("yellow");
console.log(colors);

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

/* Exercise:
    Muestra los números pares del siguiente array: 
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    Suma todos los números del array de arriba
*/
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var evenNumbers = []
var total = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenNumbers.push(numbers[i]);
    }
    total += numbers[i];
}
console.log("Even numbers: " + evenNumbers + " Sum of all numbers: " + total);
