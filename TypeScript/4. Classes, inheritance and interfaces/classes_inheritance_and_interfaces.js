var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null"
        );
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
/*
 ************* 1. Class definition **************
 We use basically the same syntax as in ES6.
 ************************************************
 */
var Person = /** @class */ (function () {
  function Person(gender) {
    this.gender = gender;
  }
  Person.prototype.sayHello = function () {
    console.log("Hello");
  };
  return Person;
})();
var person = new Person("male");
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
var PersonWithModifiers = /** @class */ (function () {
  function PersonWithModifiers(gender) {
    this.gender = gender;
  }
  PersonWithModifiers.prototype.sayHello = function () {
    console.log("Hello");
  };
  PersonWithModifiers.prototype.setGender = function (gender) {
    this.gender = gender;
  };
  PersonWithModifiers.prototype.getGender = function () {
    return this.gender;
  };
  return PersonWithModifiers;
})();
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
var StaticPerson = /** @class */ (function () {
  function StaticPerson(gender) {
    this.gender = gender;
    this.job = "Programmer";
  }
  StaticPerson.age = 1;
  return StaticPerson;
})();
var staticPerson = new StaticPerson("male");
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
var Developer = /** @class */ (function (_super) {
  __extends(Developer, _super);
  function Developer(gender, languages) {
    var _this = _super.call(this, gender) || this;
    _this.languages = languages;
    return _this;
  }
  Developer.prototype.printGender = function () {
    console.log(this.gender);
  };
  return Developer;
})(Person);
var developer = new Developer("male", ["Spanish, English", "Facts"]);
developer.printGender(); // male
var Dog = /** @class */ (function () {
  function Dog(gender, breed) {
    this.makeNoise = function () {
      return console.log("Wooof!");
    };
    this.gender = gender;
    this.breed = breed;
  }
  return Dog;
})();
