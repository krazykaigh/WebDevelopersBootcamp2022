/*jshint esversion: 8 */



const array1 = ['this', 'that', 'other'];
console.log(`array1 = ${array1}`);
const array2 = ['something', 'nothing', 'newton'];
console.log(`array2 = ${array2}`);

const array1Copy = [...array1];
console.log(`array1Copy = ${array1Copy}`);

const bothArraysPlus = [...array2, ...array1, 'scottie', ...'Kaigh'];
console.log(`bothArraysPlus = ${bothArraysPlus}`);