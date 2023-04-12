/*jshint esversion: 8 */
// way of entering array of numbers into function call
const nums = [3,534,2,78,4,7,0,13,2,67,-6,0.34];
console.log(Math.min(2,4,3));
console.log(Math.max(3,534,2,78,4,7,0,13,2,67,-6,0.34));
console.log(Math.max(nums));

// Now with spread operator 
console.log(`Max in the nums array: ${Math.max(...nums)}`);
console.log(`Min in the nums array: ${Math.min(...nums)}`);

let str = 'Hello';
console.log(...str);