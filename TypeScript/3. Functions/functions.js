/*
 **************** 1. Return type *****************
 To specify the data type of the function's return
 we need to do it like this:
 *************************************************
 */
function myFunc() {
  return "myFunc";
}
var myArrowFunc = function () {
  return 0;
  // return 'myArrowFunc' // This could also be returned
};
/*
 **************** 2. Parameters *****************
 Pretty much the same that we do for typing a
 variable or a function. We use : after the name
 of the parameter for indicating its type.
 ************************************************
 */
function add(a, b) {
  if (b === void 0) {
    b = 1;
  }
  return a + b;
}
var result = add(1);
// const result = add(1, undefined); // Same code as above
/*
 **************** 3. Type 'Function' *****************
 Prevents a variable from not storing a function.
 That is, we can only store function references in
 variables that comply with the Function type.
 ***************************************************
 */
var funcContainer;
// We can be even more explicit if we do the following:
var explicitFuncContainer;
var sayHello = function () {
  console.log("Hello");
};
var saySomething = function (thingToSay) {
  console.log(thingToSay);
  return thingToSay;
};
var funcToStore = "Something";
if (funcToStore === "Hello") {
  funcContainer = sayHello;
  //explicitFuncContainer = sayHello; // Throws an error
} else {
  funcContainer = saySomething;
  explicitFuncContainer = saySomething;
}
funcContainer();
explicitFuncContainer("I don't know");
/*
 **************** 4. Type 'Never' ******************
 Indicates that some code (usually a function) throws
 an error, which prevents the code compilation from
 continuing.
 ***************************************************
 */
var generateError = function (message) {
  throw new Error(message);
};
generateError("Oops… Something unexpected happened :(");
