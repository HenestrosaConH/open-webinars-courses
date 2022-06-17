/*
 ***************** 1. Generics ******************
 Generics are a kind of code template, by which we 
 can apply a given data type to several points of 
 our code. They are used to take advantage of code 
 without having to duplicate it due to type changes 
 and to avoid the use of "any".

 We can define the generic names as we wish. 
 However, they are usually named with letters, 
 'T' being the most typical one.
 ************************************************
 */
function identityFunc<T, Z>(arg: T, argTwo: Z): T {
  return arg;
};

const identityArrow = <T, Z>(arg: T, argTwo: Z): T => arg;

const str = identityFunc<string, boolean>("one", true);
const bool = identityArrow<boolean, number>(true, 1);
const num = identityFunc<number, string>(1, 'str');

class Generic<M> { 
	public items: M[] = [];
}

const inst = new Generic<number>();
inst.items.push(1);

const inst2 = new Generic<boolean>();
inst2.items.push(true);


/*
 ***************** 2. Castings ******************
 Casting is the process of converting a variable
 of a given data type to some other data type.
 We use the keyword 'as' followed by the name of
 the data type. Bear in mind that it won't be 
 possible to cast every variable or object that
 you want to because some data types cannot be
 converted to some other ones, like a string of
 'sdsñfsd' to number (it would return NaN).
 ************************************************
 */
type Address = {
	street: string;
}

const obj = {
  street: "Main",
} as Address;