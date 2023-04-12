/*jshint esversion: 8 */
const sumAll = function () {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
};

console.log(sumAll(8, 4, 3, 2)); // 17
console.log(sumAll(-3, 4, 55)); // 56

// Refresher
// function sum() {
//   return arguments.reduce((total, el) => total + el); //arguments is not an array
// }

// console.log(`sum = ${sum(1,23,4,53,336,2)}`);

function sum(...nums) { // using the REST spread
  return nums.reduce((total, el) => total + el); //arguments is not an array
}

console.log(`sum = ${sum(1, 23, 4, 53, 336, 2)}`);

function raceResults(gold, silver, ...everyoneElse) {
  //REST in functions collects the Rest of the arguments
  console.log(`Gold Medal winner: ${gold}`);
  console.log(`Silver Medal winner: ${silver}`);
  console.log(`Participation Medal winners: ${everyoneElse}`);
}
console.log(raceResults('Eddie', 'Marie', 'Albert', 'Mikey', 'Spencer'));