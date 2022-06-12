// "as" keyword for alias:
import defaultExport, {
	avgSum as avgSumAliased,
	avgSubtraction
} from "./12.1_module.mjs";
import * as allImports from "./12.1_module.mjs";

console.log(avgSumAliased(10, 10));     // => 10
console.log(defaultExport(4));
console.log(allImports.avgSum(10, 10)); // => 10
// default() is the default export of the module, regardless of its name on the module.
console.log(allImports.default(4));
avgSubtraction(10, 10);                 // => 5