// 1. Use generic types in the createArray function
function createArray(items) {
    return new Array().concat(items);
}
var myNumArr = createArray([100, 200, 300]);
myNumArr.push(400);
var myStrArr = createArray(["Hello", "World"]);
myStrArr.push("Hello TypeScript");
var stringOrNumber = createArray([100, "Hello"]);
stringOrNumber.push("TypeScript");
stringOrNumber.push(100);
var isNumber = function (x) { return typeof x === "number"; };
var isString = function (x) { return typeof x === "string"; };
console.group("Type validation");
console.log("myNumArr contains only numbers:", myNumArr.every(isNumber));
console.log("myStrArr contains only strings", myStrArr.every(isString));
console.log("stringOrNumber contains only string or number:", stringOrNumber.every(function (x) { return isString(x) || isNumber(x); }));
console.groupEnd();
// 2. Use generic types in the displayTupeType function
function displayTupeType(_a, indexAsType, valueAsType) {
    var index = _a[0], value = _a[1];
    console.group("Tuple type validation");
    console.log("index is", typeof index, "and match with his type: ", typeof index === indexAsType);
    console.log("value is", typeof value, "and match with his type: ", typeof value === valueAsType);
    console.groupEnd();
}
displayTupeType([1, "Hi"], "number", "string");
// 3. To apply generic typing in the Manager class
var Manager = /** @class */ (function () {
    function Manager() {
        this.items = [];
    }
    Manager.prototype.addItem = function (newItem) {
        this.items.push(newItem);
    };
    Manager.prototype.hasSameType = function () {
        var firstItemType = typeof this.items[0];
        if (firstItemType === "undefined") {
            throw new Error("Push a new item before call this method");
        }
        return this.items.every(function (item) { return typeof item === firstItemType; });
    };
    Manager.prototype.getItems = function () {
        return this.items;
    };
    return Manager;
}());
var manager = new Manager();
manager.addItem(1);
console.group("Manager class type validation");
console.log("All items has same type", manager.hasSameType());
console.groupEnd();
var hackedManager = new Manager();
hackedManager.addItem(1);
hackedManager.addItem("two");
hackedManager.addItem(3);
console.group("Hacked Manager should contains a one string");
console.log("All items has same type > should be false. It is? ", manager.hasSameType());
console.log("Founded a string:", manager.getItems().some(isString));
console.groupEnd();
