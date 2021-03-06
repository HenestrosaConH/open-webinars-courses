# RegEx
- Structure: `/[REGEX]/[FLAGS]`
- Rules:
	- `.` : Interpreted as any character.
	- `\` : Escapes the following characters.
	- `\t`: Tab.
	- `\n`: End of line.
	- `\d`: 0 1 2 3 4 5 6 7 8 9
	- `\w`: Any alphanumeric char, including `_`.
	- `\s`: Whitespace.
	- `[]`: Group of characters. 
	- `-`: Range.
	- `|`: Multiple options.
	- `^`: Starts with.
	- `$`: Ends with. Example: `"hi.".match(/\.$/) // returns true`.
	- `{}`: General repetition quantifiers. `/\d{8}/` matches 8 digits. {2,} 2 or more times.
	- `+`: Match the preceding character one or more times.
- Flags: 
	- `g`: Returns all matches.
	- without g: Returns first match.
		- `'1 2 1 5 6 7'.match(/\d+/) // returns ["1", index: 0, input: "1 2 1 5 6 7", groups: undefined]` As we can see, we only take first match "1".
		- `'1 2 1 5 6 7'.match(/\d+/g) // returns an array of all matches["1", "2", "1", "5", "6", "7"]`
	- `i`: Case-insensitive.
	- `m`: Multi-line mode (using ^).
	- `s`: . equals `\n`.
	- `u`: Enables full Unicode support.
	- `y`: At an specified index, checks if the regex matches or not.
	```
	var str = "a0bc1";
	// Indexes: 01234

	var rexWithout = /\d/;
	var rexWith = /\d/y;

	// Without:
	rexWithout.lastIndex = 2; // (This is a no-op, because the regex
	// doesn't have either g or y.)
	console.log(rexWithout.exec(str)); // ["0"], found at index 1, because without
	// the g or y flag, the search is always from
	// index 0

	// With, unsuccessful:
	rexWith.lastIndex = 2; // Says to *only* match at index 2.
	console.log(rexWith.exec(str)); // => null, there's no match at index 2,
	// only earlier (index 1) or later (index 4)

	// With, successful:
	rexWith.lastIndex = 1; // Says to *only* match at index 1.
	console.log(rexWith.exec(str)); // => ["0"], there was a match at index 1.

	// With, successful again:
	rexWith.lastIndex = 4; // Says to *only* match at index 4.
	console.log(rexWith.exec(str));
	```
- Methods:
	- `[REGEX].test([STRING])`; // If you need to know if a string matches a regular expression regexp, use regexp.test(string)
	- `[STRING].search([REGEX])`; // find a match in the entire string. Returns the index at which there is a match
	- `[STRING].match([REGEX]);` // [find a match at the beginning of the string. Returns the actual match.](https://stackoverflow.com/questions/180986/what-is-the-difference-between-re-search-and-re-match)
	For example: 
	```
	var myString = "[22].[44].[33].";
	console.log(myString.match(/\d+/)); // ['22']
	console.log(myString.match(/\d+/g)); // ['22', '44', '33']
	```

	[The main difference between string.match and regex.exec is, the regex object will be updated of the current match with regex.exec call](https://stackoverflow.com/a/27753327/15675885).
	
	For instance:
	```
	var myString = "[22].[44].[33].",
		myRegexp = /\d+/g,
		result;

	while (result = myRegexp.exec(myString)) {
		console.log(result, myRegexp.lastIndex);
	}
	```
	OUTPUT:<br>
	["22"] 3<br>
	["44"] 8<br>
	["33"] 13