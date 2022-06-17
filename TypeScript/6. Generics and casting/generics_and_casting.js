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
function identityFunc(arg, argTwo) {
    return arg;
}
;
var identityArrow = function (arg, argTwo) { return arg; };
var str = identityFunc("one", true);
var bool = identityArrow(true, 1);
var num = identityFunc(1, 'str');
var Generic = /** @class */ (function () {
    function Generic() {
        this.items = [];
    }
    return Generic;
}());
var inst = new Generic();
inst.items.push(1);
var inst2 = new Generic();
inst2.items.push(true);
var obj = {
    street: "Main"
};
