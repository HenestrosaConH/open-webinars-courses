// "as" keyword for alias
import defaultExport, {
    avgSum as avgSumAliased,
    avgSubtraction
} from "./12.1_module.mjs";

console.log(avgSumAliased(10, 10)); // 10
console.log(defaultExport(4));
avgSubtraction(10, 10); // 5