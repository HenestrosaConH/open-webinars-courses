// tsc [FILE] --watch

/*
 **************** 1. Basic types ****************
 The basic types in TypeScript and JavaScript
 consists of primitive values and objects
 such as Boolean, Number, String, Array and
 BigInt.
 ************************************************
 */
var myBool: boolean;
var myNumber: number;

var myString: string;
myString = "Double quotes";
myString = 'Single quotes';
myString = `Backticks quotes`;

var myStringArray: string[] = ['Sport', 'Films'];
myStringArray.push('String');
// myStringArray.push(2); // Throws a TypeError
var myNumberArray: number[] = [1, 2];
myNumberArray.push(0);
// myStringArray.push('2'); // Throws a TypeError

/*
 **************** 2. Any type ****************
 Accepts any type and lets the variable to be 
 reassigned to a different type.
 *********************************************
 */
var item: any;
item = 'hello';
item = 2;
item = true;

var items: any[] = [1, true, 'hello'];