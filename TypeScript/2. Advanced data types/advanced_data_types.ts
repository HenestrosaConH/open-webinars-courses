/*
 **************** 1. Tuple ****************
 ******************************************
 */
var tuple: [number, number] = [1, 2];
// var tuple: [number, number] = [1, 2, 3]; // This would throw an error

/*
 ************* 2. Custom types *************
 - Functional approach.
 *******************************************
 */
type PersonType = {
	name: string;
	age?: number;
	sayHello(): void;
}

const personType: PersonType = {
	name: 'Jane',
	sayHello: () => 'hello'
}

const personType2: PersonType = {
	name: 'Jane',
	age: 12,
	sayHello: () => 'hello'
}

/*
// WRONG! Person type does not declare the lastName property
const person: Person = {
	name: 'Jane',
	lastName: 'Doe'
}
*/


/*
 *************** 3. Interface ***************
 - Pretty much the same as the keyword 'type'.
 - OOP approach.
 ********************************************
 */
interface PersonInterface {
	name: string;
	age?: number;
	sayHello(): void;
}

const personInterface: PersonInterface = {
	name: 'Jane',
	age: 30,
	sayHello: () => 'hello'
}


/*
 **************** 4. Record ****************
 - Used in dynamic objects, like those 
 filled from an API Rest request.
 - Structure: Key - value
 - Similar to a HashMap
 *******************************************
 */
const myObject: Record<string, string> = {};

myObject.lastName = 'Pep';
myObject['age'] = '8'; // same as myObject.age

// This would be the equivalent
const myObject2: Record<string, string> = {
	lastName: 'Pep',
	age: '8',
};


/*
 *************** 5. AND (&) ***************
 - Links more than one type.
 - Only applicable to types
 ******************************************
 */
type PersonName = {
	name: string;
}

type PersonAge = {
	age: number;
}

type MixedPerson = PersonName & PersonAge

const person: MixedPerson = {
	name: 'John',
	age: 32
};

type MixedPersonAnom = PersonName & {
	hobbies: string[];
}

const mixedPerson: MixedPersonAnom = {
	name: 'Harry',
	hobbies: ['cooking', 'playing football']
}


/*
 *************** 6. OR (|) ***************
 - Type conditional.
 *****************************************
 */
type PersonConditional = PersonName | PersonAge

// We only need to comply with one of the types 
// indicated on the PersonConditional type.
const personConditional: PersonConditional = {
	age: 30
}

// However, we can also use the type PersonName
const personConditionalWithName: PersonConditional = {
	name: 'Ruben',
	age: 30
}

// We can also use | to specify that a given
// variable will be one of a fixed set of data types.
function printId(id: number | string) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}

// We could simplify 'number | string' with a type alias:
type ID = number | string;

// Then we would have id: ID as the parameter of the function