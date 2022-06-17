/*
 ************* 1. Class definition **************
 We use basically the same syntax as in ES6.
 ************************************************
 */
class Person {
	
	protected gender: string;
	
	constructor(gender: string) {
		this.gender = gender;
	}

	sayHello() {
		console.log('Hello');
	}
}

const person = new Person('male');


/*
 ************* 2. Access modifiers **************
 TypeScript supports 'public', 'private' and 
 'protected'.
 
 Bear in mind that 'protected' can be accessed 
 only within the class and by the instance of its 
 sub/child class, whereas 'private' can only be
 accessed within the class.
 ************************************************
 */
class PersonWithModifiers {
	
	private gender: string;
	
	constructor(gender: string) {
		this.gender = gender;
	}

	public sayHello() { // If we don't specify the access modifier, the compiler takes 'public' as the default.
		console.log('Hello');
	}

	setGender(gender: string) {
		this.gender = gender;
	}

	getGender() {
		return this.gender;
	}
}


/*
 ****** 3. Read-only and static properties *******
 A read-only property is defined with the keyword
 'readonly'. Its value cannot be modified, which is
 similar to the behavior of a 'const' variable.
 
 We use the keyword 'static' to declare a static
 property or method. This means that the given
 prop/method belongs to a class rather than to an
 instance of the given class.
 *************************************************
 */
class StaticPerson {
	
	private gender: string;
	static age = 1;

	readonly job: string;
	
	constructor(gender: string) {
		this.gender = gender;
		this.job = 'Programmer';
	}
}

const staticPerson = new StaticPerson('male');
// console.log(staticPerson.age); // Throws an error
console.log(staticPerson.job);
// staticPerson.job = 'Engineer'; // Throws an error

console.log(StaticPerson.age);


/*
 ***************** 4. Inheritance *****************
 We use the keyword 'extends' to inherit from another
 class. To override a function of the superclass,
 we need to use the keyword 'super'.
 **************************************************
 */
class Developer extends Person {
	
	private languages: string[];

	constructor(gender: string, languages: string[]) {
		super(gender);
		this.languages = languages;
	}

	printGender() {
		console.log(this.gender);
	}
}

const developer = new Developer('male', ['Spanish, English', 'Facts']);
developer.printGender(); // male


/*
 ***************** 4. Inheritance *****************
 We use the keyword 'implements' to implement an
 interface.
 **************************************************
 */
interface IAnimal {
	gender: string;
	makeNoise: () => void;
}

interface IDog {
	breed: string;
}

class Dog implements IAnimal, IDog {

	gender: string;
	breed: string;

	constructor(gender: string, breed: string) {
		this.gender = gender;
		this.breed = breed;
	}

	makeNoise = (): void => console.log("Wooof!");
}
