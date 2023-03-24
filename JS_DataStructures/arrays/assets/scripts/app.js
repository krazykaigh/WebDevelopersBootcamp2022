/*jshint esversion: 8 */

// ARRAYS
let planets = ['Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'];
// Remove Moon from the front, it's not a planet
console.log(planets);
planets.shift();
console.log(planets);
// Add Mercury to the front of planets
planets.unshift('Mercury');
console.log(planets);
// Now add Saturn, Uranus and Neptune to the end of planets
planets.push('Saturn', 'Uranus', 'Neptune');
console.log(planets);

const catsGroup1 = ['blue', 'wyatt', 'francesca'];
const catsGroup2 = ['freddy', 'felix', 'max'];
const allCats = catsGroup1.concat(catsGroup2);
console.log(catsGroup1, catsGroup2, allCats);

console.log(allCats[0]);
console.log(allCats.indexOf("felix"));
console.log(allCats.indexOf("wyatt"));

console.log(allCats.reverse());
console.log(allCats.reverse());

let nums = [1, 2, 3];
const numsCopy = nums;
nums.push(4);
console.log('numsCopy = ${numsCopy}');

nums = ['a', 'b', 'c'];
console.log(nums);