// 1. Use generic types in the createArray function
function createArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let myNumArr = createArray<number>([100, 200, 300]);
myNumArr.push(400);

let myStrArr = createArray<string>(["Hello", "World"]);
myStrArr.push("Hello TypeScript");

let stringOrNumber = createArray<string | number>([100, "Hello"]);
stringOrNumber.push("TypeScript");
stringOrNumber.push(100);

type CheckType = (x: any) => boolean;
const isNumber: CheckType = (x) => typeof x === "number";
const isString: CheckType = (x) => typeof x === "string";

console.group("Type validation");
console.log("myNumArr contains only numbers:", myNumArr.every(isNumber));
console.log("myStrArr contains only strings", myStrArr.every(isString));
console.log(
  "stringOrNumber contains only string or number:",
  stringOrNumber.every((x) => isString(x) || isNumber(x))
);
console.groupEnd();


// 2. Use generic types in the displayTupeType function
function displayTupeType<T, S>(
  [index, value]: [T, S],
  indexAsType: string,
  valueAsType: string
) {
  console.group("Tuple type validation");
  console.log(
    "index is",
    typeof index,
    "and match with his type: ",
    typeof index === indexAsType
  );
  console.log(
    "value is",
    typeof value,
    "and match with his type: ",
    typeof value === valueAsType
  );
  console.groupEnd();
}

displayTupeType([1, "Hi"], "number", "string");


// 3. To apply generic typing in the Manager class
class Manager<T> {

	private items: T[];

  constructor() {
    this.items = [];
  }

  addItem(newItem: T): void {
    this.items.push(newItem);
  }

  hasSameType(): boolean | never {
    const firstItemType = typeof this.items[0];

    if (firstItemType === "undefined") {
      throw new Error("Push a new item before call this method");
    }

    return this.items.every((item) => typeof item === firstItemType);
  }

  getItems() {
    return this.items;
  }
}

const manager = new Manager<number>();
manager.addItem(1);
console.group("Manager class type validation");
console.log("All items has same type", manager.hasSameType());
console.groupEnd();

const hackedManager = new Manager<number>();
hackedManager.addItem(1);
hackedManager.addItem(("two" as any) as number);
hackedManager.addItem(3);

console.group("Hacked Manager should contains a one string");
console.log(
  "All items has same type > should be false. It is? ",
  manager.hasSameType()
);
console.log("Founded a string:", manager.getItems().some(isString));
console.groupEnd();
