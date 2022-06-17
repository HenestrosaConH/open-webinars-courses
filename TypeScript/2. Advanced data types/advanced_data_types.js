/*
 **************** 1. Tuple ****************
 ******************************************
 */
var tuple = [1, 2];
var personType = {
  name: "Jane",
  sayHello: function () {
    return "hello";
  },
};
var personType2 = {
  name: "Jane",
  age: 12,
  sayHello: function () {
    return "hello";
  },
};
var personInterface = {
  name: "Jane",
  age: 30,
  sayHello: function () {
    return "hello";
  },
};
/*
 **************** 4. Record ****************
 - Used in dynamic objects, like those
 filled from an API Rest request.
 *******************************************
 */
var myObject = {};
myObject.lastName = "Pep";
myObject["age"] = "8"; // same as myObject.age
// This would be the equivalent
var myObject2 = {
  lastName: "Pep",
  age: "8",
};
var person = {
  name: "John",
  age: 32,
};
var mixedPerson = {
  name: "Harry",
  hobbies: ["cooking", "playing football"],
};
// We only need to comply with one of the types
// indicated on the PersonConditional type.
var personConditional = {
  age: 30,
};
// However, we can also use the type PersonName
var personConditionalWithName = {
  name: "Ruben",
  age: 30,
};
// We can also use | to specify that a given
// variable will be one of a fixed set of data types.
function printId(id) {
  if (typeof id === "string") {
    // In this branch, id is of type 'string'
    console.log(id.toUpperCase());
  } else {
    // Here, id is of type 'number'
    console.log(id);
  }
}
// Then we would have id: ID as the parameter of the function
