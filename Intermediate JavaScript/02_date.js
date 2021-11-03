// Current timestamp
var date = new Date();
console.log(date);

// Functions of the object
var year = date.getFullYear();
// CAREFUL: Month starts from 0, which is January. 11 is December.
var month = date.getMonth() + 1;
var day = date.getDate();
console.log("Hola, hoy es " + day + " del mes " + month + " del año " + year);