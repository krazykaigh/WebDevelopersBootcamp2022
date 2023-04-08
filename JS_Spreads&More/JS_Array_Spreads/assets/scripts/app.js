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

const array1 = ['this','that','other'];
console.log(`array1 = ${array1}`);
const array2 = ['something', 'nothing', 'newton'];
console.log(`array2 = ${array2}`);

const array1Copy = [...array1];
console.log(`array1Copy = ${array1Copy}`);

const bothArraysPlus = [...array2,...array1,'scottie',...'Kaigh'];
console.log(`bothArraysPlus = ${bothArraysPlus}`);