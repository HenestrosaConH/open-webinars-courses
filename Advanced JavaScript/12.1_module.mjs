const avg = 0.5;

export const avgSum = (a, b) => (a + b) * avg;
export const avgSubtraction = (a, b) => (a - b) * avg;

/* It also can be made with
export {
    avgSum, 
    avgSubtraction
}
*/

// Only one default export per file
export default function square(c) {
    return c * c;
};